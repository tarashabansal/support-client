export type SupportCategory =
  | "bug"
  | "feedback"
  | "feature"
  | "support";

export interface SubmitSupportTicketInput {
  product: string;
  category: SupportCategory;
  message: string;
  user_email: string;
  metadata?: Record<string, any>;
}

export interface SupportClientConfig {
  endpoint: string;
  anonKey: string;
}

export function createSupportClient(config: SupportClientConfig) {
  if (!config.endpoint || !config.anonKey) {
    throw new Error("Support client requires endpoint and anonKey");
  }

  return {
    async submitTicket(input: SubmitSupportTicketInput) {
      const res = await fetch(config.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.anonKey}`
        },
        body: JSON.stringify(input)
      });

      if (!res.ok) {
        const error = await res.text();
        throw new Error(
          `Support ticket failed: ${res.status} ${error}`
        );
      }

      return res.json();
    }
  };
}
