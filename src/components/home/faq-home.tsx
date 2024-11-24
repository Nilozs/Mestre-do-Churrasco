import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionHome() {
  return (
    <Accordion type="single" collapsible className="w-full h-screen mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>Como montar um bom computador?</AccordionTrigger>
        <AccordionContent>
          Montar um bom computador envolve escolher peças de qualidade que sejam
          compatíveis entre si. Opte por uma boa placa-mãe, processador potente e
          memória RAM suficiente para suas necessidades. Certifique-se de
          organizar os cabos e instalar os componentes corretamente para
          garantir desempenho e durabilidade.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Dicas gerais para otimizar seu PC</AccordionTrigger>
        <AccordionContent>
          Use componentes atualizados: Invista em um SSD para maior velocidade
          de leitura e escrita. Mantenha o software atualizado: Instale drivers
          atualizados e execute manutenção periódica. Refrigeração adequada:
          Certifique-se de que os ventiladores e dissipadores estão funcionando
          bem para evitar superaquecimento. Organização: Arrume os cabos dentro
          do gabinete para melhorar o fluxo de ar.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Importância do Resfriamento</AccordionTrigger>
        <AccordionContent>
          Manter os componentes do seu computador resfriados é essencial para
          garantir o desempenho e prolongar sua vida útil. Utilize pasta térmica
          de boa qualidade no processador e invista em coolers eficientes. Para
          computadores mais potentes, considere um sistema de resfriamento a
          água.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Dicas para melhorar o desempenho</AccordionTrigger>
        <AccordionContent>
          <div className="aspect-w-16 aspect-video aspect-h-9 mb-6 overflow-auto">
            <iframe
              className="w-screen-auto h-screen-auto"
              src="https://www.youtube.com/embed/RDIZXpe0yBQ?si=NpWN88vjNorEAeCV"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
