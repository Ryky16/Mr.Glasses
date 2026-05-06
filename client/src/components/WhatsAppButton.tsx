export function WhatsAppButton({ model }: { model?: string }) {
  const phone = "221767913986";
  const message = model
    ? `Bonjour Peter Optique. Je suis intéressé(e) par : *${model}*`
    : `Bonjour Peter Optique. Je viens du site web`;

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-5 shadow-2xl z-50 animate-pulse flex items-center justify-center"
    >
      <span className="text-lg font-bold">WhatsApp</span>
    </a>
  );
}