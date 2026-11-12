"use client";

import * as React from "react";
import { toast } from "sonner";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ConnectDialog({
  triggerLabel = "Book Live Demo",
  variant = "default",
  size = "default",
}: {
  triggerLabel?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
}) {
  const [open, setOpen] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [scopeNote, setScopeNote] = React.useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      toast.error("Please enter your name and work email address.");
      return;
    }

    toast.success("Request received. A solutions architect will follow up within 1 business day.");
    setFullName("");
    setEmail("");
    setCompany("");
    setScopeNote("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant={variant}
            size={size}
            className="connect-dialog-trigger rounded-full px-5 font-medium tracking-tight"
          />
        }
      >
        <Terminal className="mr-1.5 h-3.5 w-3.5" />
        <span>{triggerLabel}</span>
      </DialogTrigger>
      <DialogContent className="connect-dialog-content rounded-2xl border-2 border-[var(--nb-ink)] bg-card p-6 shadow-[8px_8px_0px_var(--nb-shadow)] sm:max-w-md">
        <DialogHeader className="connect-dialog-header space-y-2">
          <DialogTitle className="font-serif text-2xl font-semibold tracking-tight">
            Schedule an ERP &amp; Software Briefing
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
            Tell our solutions engineering team about your ERP modernization goals, custom software roadmap, or multi-entity integration needs.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="connect-dialog-form mt-2 space-y-4">
          <div className="form-field-group space-y-1.5">
            <Label htmlFor="connect-name">Full Name</Label>
            <Input
              id="connect-name"
              type="text"
              placeholder="e.g. Elena Vance, VP of Operations"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="form-field-group space-y-1.5">
            <Label htmlFor="connect-email">Work Email</Label>
            <Input
              id="connect-email"
              type="email"
              placeholder="elena@enterprise.io"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-field-group space-y-1.5">
            <Label htmlFor="connect-company">Company &amp; Region</Label>
            <Input
              id="connect-company"
              type="text"
              placeholder="e.g. Meridian Logistics · EMEA / North America"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="form-field-group space-y-1.5">
            <Label htmlFor="connect-scope">ERP Modules or Custom Engineering Scope</Label>
            <Textarea
              id="connect-scope"
              rows={3}
              placeholder="e.g. Multi-currency finance consolidation, warehouse inventory sync, SAP/legacy migration, or custom API platform..."
              value={scopeNote}
              onChange={(e) => setScopeNote(e.target.value)}
            />
          </div>

          <DialogFooter className="connect-dialog-footer pt-2">
            <Button type="submit" className="w-full rounded-full">
              Request Architecture Briefing
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
