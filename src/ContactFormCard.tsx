import { useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import { CONTACT_API_URL } from "./config"; // adjust path

const ContactFormCard = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [error, setError] = useState("");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setError("");

        try {
            const res = await fetch(CONTACT_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.error || `Request failed (${res.status})`);
            }

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err: any) {
            setStatus("error");
            setError(err?.message || "Something went wrong");
        }
    };

    return (
        <div className="glass-card rounded-2xl p-8 h-full flex flex-col justify-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-primary">
                <Send className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">Skicka ett meddelande</h3>
            <p className="text-muted-foreground mb-6">
                Fyll i formuläret så skickas det till min mail.
      </p>

            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label className="text-sm text-muted-foreground">Namn</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg bg-background/40 border border-border px-3 py-2 outline-none focus:border-primary/60"
                        placeholder="Ditt namn"
                    />
                </div>

                <div>
                    <label className="text-sm text-muted-foreground">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                        className="mt-1 w-full rounded-lg bg-background/40 border border-border px-3 py-2 outline-none focus:border-primary/60"
                        placeholder="din@email.com"
                    />
                </div>

                <div>
                    <label className="text-sm text-muted-foreground">Meddelande</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="mt-1 w-full rounded-lg bg-background/40 border border-border px-3 py-2 outline-none focus:border-primary/60 resize-none"
                        placeholder="Berätta kort om projektet..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 glow-primary w-full"
                >
                    {status === "sending" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
                    {status === "sending" ? "Skickar..." : "Skicka"}
                </button>

                {status === "success" && <p className="text-sm text-foreground/90">Tack! Skickat ✅</p>}
                {status === "error" && (
                    <p className="text-sm text-destructive">Kunde inte skicka: {error}</p>
                )}
            </form>
        </div>
    );
};

export default ContactFormCard;
