import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionHOme() {
  return (
    <Accordion type="single" collapsible className="w-full h-screen  mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>Como fazer um bom churrasco?</AccordionTrigger>
        <AccordionContent>
          Fazer um bom churrasco envolve a escolha dos ingredientes certos, a
          técnica adequada de preparo e algumas dicas para garantir que a carne
          fique deliciosa. Aqui está um guia completo para um churrasco de
          sucesso.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger> Dicas Gerais para Temperar Carne</AccordionTrigger>
        <AccordionContent>
          Não Exagere no Sal: O sal ajuda a realçar o sabor, mas use com
          moderação para não deixar a carne muito salgada. Espere um Tempo para
          o Tempero Agir: Se possível, deixe a carne descansar após temperar
          para que os sabores se integrem melhor. Pimenta-do-Reino e Alho: São
          ótimos para adicionar sabor extra. O alho em pó é uma boa opção se
          você não quiser pedaços visíveis de alho na carne. Ervas Frescas: São
          ótimas para dar um toque fresco e aromático à carne. Use salsinha,
          cebolinha, alecrim e tomilho. Com esses temperos e técnicas, suas
          carnes para o churrasco ficaram deliciosas e cheias de sabor!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger> Descanso da Carne</AccordionTrigger>
        <AccordionContent>
          Após retirar a carne da grelha, deixe-a descansar por 5 a 10 minutos
          antes de cortar. Esse tempo é crucial para permitir que os sucos se
          redistribuam, resultando em uma carne mais suculenta e macia. Cubra
          levemente a carne com papel alumínio para manter o calor e a umidade
          durante o descanso. Ao cortar, faça-o contra as fibras para obter uma
          textura mais macia e agradável ao paladar.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
