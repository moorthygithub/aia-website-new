'use client';
import React, { useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

const FreeResourceFlashCard = () => {
  const [openDrawer, setOpenDrawer] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  const modules = [
    {
      id: 1,
      number: "01",
      title: "Financial Transactions & Fraud Schemes",
      icon: "💡",
      cards: [
        { id: 1, question: "What is Owner's Equity?", answer: "The investment of a company's owner plus accumulate profits." },
        { id: 2, question: "Accounting Equation?", answer: "Asset = Liabilities + Owner's Equity" },
        { id: 3, question: "How debits impacts assets and expenses?", answer: "Debits increase asset and expense account while credits decrease them." },
        { id: 4, question: "What does Balance Sheet show?", answer: "Shows a snapshot of a company's financial situation at a specific point in time, generally the last day of the accounting period." },
        { id: 5, question: "Sections of Statement of Cash flows", answer: "1. Cash flows from operations\n2. Cash flows from investing activities\n3. Cash flows from financing activities" },
        { id: 6, question: "Fictitious sales always involve fake customers?", answer: "Fictitious sales most often involve fake customers but can also involve legitimate customers." },
        { id: 7, question: "Three common methods of concealing liabilities and expenses.", answer: "1. Liability/expense omissions\n2. Improperly capitalized costs\n3. Failure to disclose or Contingent liability" },
        { id: 8, question: "What is Quick Ratio?", answer: "Compares the most liquid assets to current liabilities" },
        { id: 9, question: "Sales Skimming means?", answer: "An employee sells goods or service to a customer and collects the customer's payment but makes no record of the sale." },
        { id: 10, question: "What is Ransomware?", answer: "Is a form of malware that locks a user's operating system and restricts access to data files until a ransom is paid." }
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Law",
      icon: "⚖️",
      cards: [
        { id: 1, question: "Common law is also known as?", answer: "Judge-made law" },
        { id: 2, question: "What is known as Precedent", answer: "Any judgment made by higher court is known as precedent" },
        { id: 3, question: "When people say an act is against the law, they are referring to?", answer: "Substantive law" },
        { id: 4, question: "Define parallel proceedings?", answer: "Simultaneous criminal and civil actions against the same defendant that are based upon a single set of facts." },
        { id: 5, question: "Under civil law systems, courts are bound by?", answer: "Courts are by an accepted set of codified principles or compiled statutes and are not bound by previous court decisions" },
        { id: 6, question: "Who has the primary responsibility of discovering evidence in?", answer: "The Presiding Judge" },
        { id: 7, question: "What are the administrative penalties normally levied in civil actions?", answer: "Monetary fines and penalties, license suspension or revocation and debarment" },
        { id: 8, question: "Difference between embezzlement and larceny?", answer: "If only custody is given then larceny and if lawfulness there then embezzlement" },
        { id: 9, question: "Three basic remedies?", answer: "1. Testimonial evidence\n2. Real evidence\n3. Demonstrative evidence" },
        { id: 10, question: "Character evidence is also known as?", answer: "Propensity evidence" }
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Investigation",
      icon: "🔍",
      cards: [
        { id: 1, question: "What is Fraud Examination?", answer: "Fraud Examination is a process of resolving allegations of fraud from inception to disposition." },
        { id: 2, question: "Predication means?", answer: "Predication is totality of circumstances that would lead a reasonable, professionally trained, and prudent individual to believe that a fraud has occurred, is occurring, and/or will occur." },
        { id: 3, question: "Three form of evidence?", answer: "I. Documentary\nII. Testimonial\nIII. Digital Evidence." },
        { id: 4, question: "Indented writing Means?", answer: "Indented writing is the impression a writing leaves on sheets of paper below the piece of paper that contain writing." },
        { id: 5, question: "Intelligence factor to consider when assessing signs of deception?", answer: "The more intelligent the respondent, the more reliable verbal and nonverbal clues will be." },
        { id: 6, question: "Non-public records can be obtained through?", answer: "Can be obtained through:\nI. Consent\nII. A subpoena\nIII. A search warrant." },
        { id: 7, question: "What is Pretexting?", answer: "Pretexting is the act of impersonating someone else or making false or misleading statements to obtain, sell, or buy information about a person or organization." },
        { id: 8, question: "Data Analysis process?", answer: "1. Planning Phase\n2. Preparation Phase\n3. Testing and Interpretation Phase\n4. Post-analysis Phase." },
        { id: 9, question: "What is Link Analysis?", answer: "Visual representations of data from multiple data sources to track the movement of money, demonstrate complex networks, and discover communications, patterns, trends, and relationships." },
        { id: 10, question: "What is Covert Operation?", answer: "A covert operation is an investigation technique designed to obtain evidence (legal & admissible) by use of agents whose true intentions are not communicated to the target." }
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Fraud Prevention & Deterrence",
      icon: "🛡️",
      cards: [
        { id: 1, question: "Disadvantages of Punishment towards changing behaviour?", answer: "1. Least effective method\n2. Works only with constant supervision.\n3. Temporary suppression of an undesirable behaviour." },
        { id: 2, question: "What is Positive Reinforcement?", answer: "A positive reinforcement presents a positive stimulus in exchange for the desired response." },
        { id: 3, question: "What is Negative Reinforcement?", answer: "A negative reinforcement withdraws a negative stimulus in exchange for the response." },
        { id: 4, question: "Characteristics of White Collar Criminals?", answer: "1. Be white males with a moderate social status.\n2. Live beyond Means" },
        { id: 5, question: "Three legs of Fraud Triangle?", answer: "1. Perceived non-shareable financial need\n2. Perceived opportunity\n3. Rationalization" },
        { id: 6, question: "Principles of Corporate Governance?", answer: "1. Accountability\n2. Transparency\n3. Fairness\n4. Responsibility" },
        { id: 7, question: "Nature of G20/OECD principles of corporate Government?", answer: "The principles are nonbinding, however as their implementation must be adapted to different legal, economic, and cultural circumstances." },
        { id: 8, question: "Two types of intentional misstatements as per (ISA) 240?", answer: "1. Misstatements arising from fraudulent financial reporting.\n2. Misstatements arising from misappropriation of assets." },
        { id: 9, question: "What is Inherent Risk?", answer: "Risks that are present before management actions are taken as inherent risks." },
        { id: 10, question: "What is Privileged Information?", answer: "Privileged information is information that cannot be demanded, even by a court; it is information that is protected by law from evidence." }
      ]
    }
  ];

  const toggleFlip = (moduleId, cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [`${moduleId}-${cardId}`]: !prev[`${moduleId}-${cardId}`]
    }));
  };

  const closeDrawer = () => {
    setOpenDrawer(null);
  
    setFlippedCards({});
  };

  const currentModule = modules.find(m => m.id === openDrawer);

  
  const handleDrawerChange = (open) => {
    if (!open) {
      closeDrawer();
    }
  };

  return (
    <div className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
      {/* Header */}
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="mb-2 text-xl font-bold text-gray-800 sm:mb-4 sm:text-2xl md:text-3xl">
          <span className="mr-2" style={{ color: '#F3831C' }}>»</span>
          Free Flash Cards
        </h2>
        <p className="text-sm text-gray-600 sm:text-base">
          Success is a Process not an Event
        </p>
      </div>

    
      <div className="mx-auto max-w-5xl cursor-pointer">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-10">
          {modules.map((module) => (
            <div key={module.id} className="flex flex-col items-center ">
            
              <button
                onClick={() => setOpenDrawer(module.id)}
                className="group cursor-pointer relative mb-3 flex h-28 w-28 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:h-32 sm:w-32 sm:text-5xl md:h-36 md:w-36"
                style={{
                  background: 'linear-gradient(135deg, #0F3652 0%, #1a5483 100%)'
                }}
              >
                <div className="absolute inset-0 rounded-full border-4" style={{ borderColor: '#F3831C', opacity: 0.5 }}></div>
                <div className="absolute inset-2 rounded-full border-2 border-white opacity-20"></div>
                <span className="relative z-10 text-4xl">{module.icon}</span>
              </button>
              
         
              <div className="text-center">
                <p className="text-xs font-semibold sm:text-sm" style={{ color: '#0F3652' }}>
                  {module.title}
                </p>
                <p className="mt-1 text-xs font-bold sm:text-sm" style={{ color: '#F3831C' }}>
                  {module.number}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <Drawer 
        open={openDrawer !== null} 
        onOpenChange={handleDrawerChange}
        snapPoints={[0.7]}
      >
        <DrawerContent className="flex max-h-[95vh] flex-col">
          <DrawerHeader className="text-white flex flex-row justify-between items-center" style={{ backgroundColor: '#0F3652' }}>
            <div>
                <DrawerTitle className="text-xl font-bold text-white sm:text-2xl">
              <span className="mr-2" style={{ color: '#F3831C' }}>»</span>
              {currentModule?.title}
            </DrawerTitle>
            <DrawerDescription style={{ color: '#F3831C' }}>
              Module {currentModule?.number}
            </DrawerDescription>
            </div>
             <button
                onClick={closeDrawer}
                className="w-24 rounded-none py-1 font-semibold text-white transition-colors sm:py-1 bg-[#F3831C] hover:bg-[#834409] cursor-pointer "
               
               
              >
                Close
              </button>
          </DrawerHeader>

      
          <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 pb-48 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
              {currentModule?.cards.map((card) => {
                const isFlipped = flippedCards[`${openDrawer}-${card.id}`];
                
                return (
                  <div
                    key={card.id}
                    className="group relative h-60 cursor-pointer perspective sm:h-64"
                    onClick={() => toggleFlip(openDrawer, card.id)}
                  >
                    <div
                      className={`relative h-full w-full transition-transform duration-500 preserve-3d ${
                        isFlipped ? 'rotate-y-180' : ''
                      }`}
                    >
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 bg-white p-4 shadow-sm backface-hidden sm:p-4">
                 
                        <div 
                          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white sm:h-8 sm:w-8 sm:text-sm"
                          style={{ backgroundColor: '#0F3652' }}
                        >
                          {card.id}
                        </div>
                        
                        <h4 className="mb-4  w-full h-full flex items-center justify-center text-center text-sm font-semibold sm:text-sm" style={{ color: '#0F3652' }}>
                          {card.question}
                        </h4>
                        
                        <button 
                          className="mt-auto rounded-full px-4 py-1.5 text-xs font-medium text-white transition-colors sm:px-4 sm:py-1.5 sm:text-sm"
                          style={{ backgroundColor: '#F3831C' }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#e27519'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#F3831C'}
                        >
                          Click to Flip
                        </button>
                      </div>

                    
                      <div 
                        className="absolute inset-0 flex items-center justify-center rounded-lg border-2 p-4 shadow-sm backface-hidden rotate-y-180 sm:p-4"
                        style={{
                          borderColor: '#0F3652',
                          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                        }}
                      >
                        <p 
                          className="whitespace-pre-line text-center text-xs sm:text-sm"
                          style={{ color: '#0F3652' }}
                        >
                          {card.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

      
        </DrawerContent>
      </Drawer>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default FreeResourceFlashCard;