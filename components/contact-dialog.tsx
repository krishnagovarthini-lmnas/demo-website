"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactDialog({
  triggerClassName = "",
}: {
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState("");

  async function onSubmit(formData: FormData) {
    setLoading(true);

    const payload = {
      email: formData.get("email") as string,
      notes: (formData.get("message") as string) || "",
      option: option,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data.error) throw new Error(data.error);
      setOpen(false);

      if (data.message) {
        toast({
          title: "Message sent",
          description: "We’ll get back to you shortly.",
        });
        setOpen(false);
      }
    } catch (err) {
      console.error("Error in contact form:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={
            triggerClassName || "bg-blue-900 hover:bg-blue-800 text-white"
          }
        >
          Contact us
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-blue-900">Contact us</DialogTitle>
          <DialogDescription className="text-gray-600">
            Tell us a bit about you and how we can help.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            onSubmit(fd);
          }}
          className="grid grid-cols-1 gap-4"
        >
          <div className="grid gap-2">
            <div>
              <Label htmlFor="email" className="mb-1.5">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="option">Select Product Group</Label>
            <Select value={option} onValueChange={setOption}>
              <SelectTrigger id="option" className="w-full">
                <SelectValue placeholder="Choose a product group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Cast resin transformers">
                  Cast resin transformers
                </SelectItem>
                <SelectItem value="Compact-substation">
                  Compact-substation
                </SelectItem>
                <SelectItem value="Large power transformers">
                  Large power transformers
                </SelectItem>
                <SelectItem value="Medium power transformers">
                  Medium power transformers
                </SelectItem>
                <SelectItem value="Oil distribution transformers">
                  Oil distribution transformers
                </SelectItem>
                <SelectItem value="Special transformers">
                  Special transformers
                </SelectItem>
                <SelectItem value="Transformer service">
                  Transformer service
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Describe your inquiry..."
              className="min-h-28"
            />
          </div>

          <div className="mt-2 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-600"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
