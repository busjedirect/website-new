"use client";

import { useState, useMemo, useEffect } from "react";
import { useRequestStore } from "../../store/request-store";
import { ITEM_CATEGORIES, ITEM_CATEGORY_MAP } from "../../constants/item-options";
import type { ItemCategory_ } from "../../constants/item-options";
import type { RequestItemInput } from "../../types/item.types";
import { ItemSearchBar } from "./item-search-bar";
import { ItemTileGrid } from "./item-tile-grid";
import { ItemConfigPanel } from "./item-config-panel";
import { CustomItemForm } from "./custom-item-form";
import { SelectedItemsList } from "./selected-items-list";

type PanelState =
  | { type: "none" }
  | { type: "category"; category: ItemCategory_ }
  | { type: "custom"; initialName: string };

// ---------------------------------------------------------------------------
// Mobile bottom-sheet overlay
// ---------------------------------------------------------------------------

interface MobileOverlayProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function MobileOverlay({ open, onClose, children }: MobileOverlayProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        style={{ backdropFilter: "blur(2px)" }}
      />

      {/* Bottom sheet — flex-col so the inner content can scroll independently */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92dvh] flex-col rounded-t-2xl bg-white lg:hidden"
        style={{ animation: "slideUp 200ms ease-out" }}
      >
        {/* Drag handle */}
        <div className="flex shrink-0 justify-center pt-3 pb-1">
          <div className="h-1 w-8 rounded-full bg-zinc-200" />
        </div>

        {/*
          This wrapper must be flex-1 + min-h-0 so the child (ItemConfigPanel /
          CustomItemForm) can use overflow-y-auto to scroll its own body while
          the header and footer stay pinned.
        */}
        <div className="flex min-h-0 flex-1 flex-col px-5 pb-6">
          {children}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

// ---------------------------------------------------------------------------
// Desktop focus overlay — dims and blurs the background
// ---------------------------------------------------------------------------

interface DesktopFocusOverlayProps {
  open: boolean;
  onClose: () => void;
}

function DesktopFocusOverlay({ open, onClose }: DesktopFocusOverlayProps) {
  return (
    <div
      aria-hidden="true"
      onClick={onClose}
      className="fixed inset-0 z-20 hidden lg:block"
      style={{
        backgroundColor: "rgba(0,0,0,0.18)",
        backdropFilter: open ? "blur(8px)" : "none",
        WebkitBackdropFilter: open ? "blur(8px)" : "none",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 150ms ease-out, backdrop-filter 150ms ease-out",
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Desktop side panel — slides in from the right
// ---------------------------------------------------------------------------

interface DesktopSidePanelProps {
  open: boolean;
  children: React.ReactNode;
}

function DesktopSidePanel({ open, children }: DesktopSidePanelProps) {
  return (
    <div
      role={open ? "dialog" : undefined}
      aria-modal={open ? "true" : undefined}
      className="fixed top-0 right-0 z-30 hidden h-full w-80 flex-col border-l border-zinc-200 bg-white lg:flex"
      style={{
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 200ms ease-out",
        boxShadow: open ? "-8px 0 32px rgba(0,0,0,0.12)" : "none",
      }}
    >
      {open && children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hoofd-component
// ---------------------------------------------------------------------------

export function ItemSelector() {
  const addItem = useRequestStore((s) => s.addItem);

  const [query, setQuery] = useState("");
  const [panel, setPanel] = useState<PanelState>({ type: "none" });

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ITEM_CATEGORIES;
    return ITEM_CATEGORIES.filter((cat) => cat.label.toLowerCase().includes(q));
  }, [query]);

  const activeItemId =
    panel.type === "category" ? panel.category.id : null;
  const panelOpen = panel.type !== "none";

  // ESC closes the desktop panel
  useEffect(() => {
    if (!panelOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCancel();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panelOpen]);

  function handleTileSelect(item: { id: string }) {
    const category = ITEM_CATEGORY_MAP[item.id as keyof typeof ITEM_CATEGORY_MAP];
    if (!category) return;
    setPanel((prev) =>
      prev.type === "category" && prev.category.id === item.id
        ? { type: "none" }
        : { type: "category", category }
    );
  }

  function handleAddCustom(name: string) {
    setPanel({ type: "custom", initialName: name });
  }

  function handleAdd(input: RequestItemInput) {
    addItem(input);
    setPanel({ type: "none" });
    setQuery("");
  }

  function handleCancel() {
    setPanel({ type: "none" });
  }

  // Render the correct panel content
  const panelContent =
    panel.type === "category" ? (
      <ItemConfigPanel
        category={panel.category}
        onAdd={handleAdd}
        onCancel={handleCancel}
      />
    ) : panel.type === "custom" ? (
      <CustomItemForm
        initialNaam={panel.initialName}
        onAdd={handleAdd}
        onCancel={handleCancel}
      />
    ) : null;

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Desktop                                                             */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="hidden lg:flex lg:flex-col lg:gap-4"
        style={{
          transition: "opacity 150ms ease-out, transform 150ms ease-out",
          opacity: panelOpen ? 0.6 : 1,
          transform: panelOpen ? "scale(0.99)" : "scale(1)",
          pointerEvents: panelOpen ? "none" : "auto",
        }}
      >
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <ItemSearchBar value={query} onChange={setQuery} />
          <div className="mt-5">
            <ItemTileGrid
              items={filteredItems}
              onSelect={handleTileSelect}
              activeItemId={activeItemId}
              emptyQuery={query.trim() || undefined}
              onAddCustom={handleAddCustom}
            />
          </div>
        </div>
        <SelectedItemsList />
      </div>

      <DesktopFocusOverlay open={panelOpen} onClose={handleCancel} />

      <DesktopSidePanel open={panelOpen}>
        <div className="flex h-full flex-col p-5">
          {panelContent}
        </div>
      </DesktopSidePanel>

      {/* ------------------------------------------------------------------ */}
      {/* Mobiel                                                              */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <ItemSearchBar value={query} onChange={setQuery} />
          <div className="mt-4">
            <ItemTileGrid
              items={filteredItems}
              onSelect={handleTileSelect}
              activeItemId={activeItemId}
              emptyQuery={query.trim() || undefined}
              onAddCustom={handleAddCustom}
            />
          </div>
        </div>
        <SelectedItemsList />
      </div>

      <MobileOverlay open={panelOpen} onClose={handleCancel}>
        {panelContent}
      </MobileOverlay>
    </>
  );
}
