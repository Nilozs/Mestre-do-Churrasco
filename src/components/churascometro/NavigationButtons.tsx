import React from 'react';

interface NavigationButtonsProps {
  step: number;
  totalSteps: number;
  prevStep: () => void;
  nextStep: () => void;
  isSubmitting: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  step,
  totalSteps,
  prevStep,
  nextStep,
  isSubmitting,
}) => {
  return (
    <div className="flex justify-between mt-4">
      {step > 0 && (
        <button
          type="button"
          onClick={prevStep}
          className="rounded bg-custom-red px-4 py-2 text-white"
        >
          Voltar
        </button>
      )}
      {step < totalSteps - 1 ? (
        <button
          type="button"
          onClick={nextStep}
          className="rounded bg-custom-red px-4 py-2 text-white"
        >
          Próximo
        </button>
      ) : (
        <button
          type="submit"
          className="rounded bg-custom-maroon px-4 py-2 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Prosseguir'}
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
