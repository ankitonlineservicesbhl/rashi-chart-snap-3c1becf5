import React from 'react';
import { Prediction } from '@/lib/predictions';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface PredictionsTabProps {
  predictions: Prediction[];
}

const planetFullNames: Record<string, string> = {
  As: 'Ascendant (Lagna)',
  Su: 'Sun (Surya)',
  Mo: 'Moon (Chandra)',
  Ma: 'Mars (Mangal)',
  Me: 'Mercury (Budha)',
  Ju: 'Jupiter (Guru)',
  Ve: 'Venus (Shukra)',
  Sa: 'Saturn (Shani)',
  Ra: 'Rahu (North Node)',
  Ke: 'Ketu (South Node)'
};

const planetColors: Record<string, string> = {
  As: 'bg-slate-100 border-slate-300',
  Su: 'bg-orange-50 border-orange-300',
  Mo: 'bg-blue-50 border-blue-300',
  Ma: 'bg-red-50 border-red-300',
  Me: 'bg-green-50 border-green-300',
  Ju: 'bg-yellow-50 border-yellow-300',
  Ve: 'bg-pink-50 border-pink-300',
  Sa: 'bg-gray-100 border-gray-400',
  Ra: 'bg-purple-50 border-purple-300',
  Ke: 'bg-amber-50 border-amber-300'
};

const PredictionsTab: React.FC<PredictionsTabProps> = ({ predictions }) => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-foreground">Planetary Predictions</h2>
        <p className="text-sm text-muted-foreground">Based on house and sign placements</p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-2">
        {predictions.map((prediction, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className={`border rounded-lg px-4 ${planetColors[prediction.planet] || 'bg-card'}`}
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <span className="font-bold text-lg">{prediction.planet}</span>
                <span className="text-sm text-muted-foreground">
                  {planetFullNames[prediction.planet]}
                </span>
                <span className="ml-auto text-sm font-medium">
                  House {prediction.house} • {prediction.sign}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="p-3 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-sm text-primary mb-2">
                    🏠 House {prediction.house} Effect
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {prediction.houseEffect}
                  </p>
                </div>
                
                <div className="p-3 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-sm text-primary mb-2">
                    ♈ {prediction.sign} Sign Effect
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {prediction.signEffect}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <h3 className="font-semibold text-sm mb-2">📜 Disclaimer</h3>
        <p className="text-xs text-muted-foreground">
          These predictions are based on traditional Vedic astrology principles and are for 
          entertainment and educational purposes only. Actual life outcomes depend on many factors 
          including free will, karma, and divine grace. Always consult a qualified astrologer for 
          detailed analysis.
        </p>
      </div>
    </div>
  );
};

export default PredictionsTab;
