import React, { useState, useEffect } from 'react';
import { Sparkles, Binary, Boxes, ArrowLeft, Rocket, Star, Zap } from 'lucide-react';

type MonsterType = {
  name: string;
  gradient: string[];
  behavior: {
    maxSpasms: number;
    spawnAnimation: string;
    scaleRange: [number, number];
    rotationRange: [number, number];
    moveRange: number;
    transitionSpeed: number;
  };
};

const MONSTER_TYPES: MonsterType[] = [
  {
    name: "Solana Sentinel",
    gradient: ['#9945FF', '#14F195'],
    behavior: {
      maxSpasms: 15,
      spawnAnimation: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      scaleRange: [0.5, 2],
      rotationRange: [-360, 720],
      moveRange: 200,
      transitionSpeed: 150,
    }
  },
  {
    name: "Quantum Quasar",
    gradient: ['#14F195', '#00C2FF'],
    behavior: {
      maxSpasms: 20,
      spawnAnimation: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      scaleRange: [0.8, 1.5],
      rotationRange: [-180, 180],
      moveRange: 300,
      transitionSpeed: 100,
    }
  },
  {
    name: "Void Vortex",
    gradient: ['#00C2FF', '#9945FF', '#14F195'],
    behavior: {
      maxSpasms: 12,
      spawnAnimation: 'cubic-bezier(0.87, 0, 0.13, 1)',
      scaleRange: [0.3, 2.5],
      rotationRange: [-720, 720],
      moveRange: 150,
      transitionSpeed: 200,
    }
  },
  {
    name: "Plasma Phantom",
    gradient: ['#14F195', '#9945FF', '#00C2FF'],
    behavior: {
      maxSpasms: 25,
      spawnAnimation: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      scaleRange: [1, 3],
      rotationRange: [0, 1080],
      moveRange: 100,
      transitionSpeed: 80,
    }
  },
  {
    name: "Nebula Nomad",
    gradient: ['#9945FF', '#00C2FF', '#14F195', '#9945FF'],
    behavior: {
      maxSpasms: 18,
      spawnAnimation: 'cubic-bezier(0.76, 0, 0.24, 1)',
      scaleRange: [0.4, 2.2],
      rotationRange: [-540, 540],
      moveRange: 250,
      transitionSpeed: 120,
    }
  }
];

function MonsterGallery() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative p-8">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-blue-900/50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] via-[#00C2FF] to-[#14F195]">
              Secret Monster Gallery
            </h1>
            <button onClick={() => window.history.back()} className="flex items-center space-x-2 text-purple-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Generator</span>
            </button>
          </div>

          {/* Monster Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {MONSTER_TYPES.map((monster, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div
                  className="w-48 h-48 mx-auto rounded-2xl animate-monster-morph mb-4"
                  style={{
                    background: `linear-gradient(45deg, ${monster.gradient.join(', ')})`,
                    boxShadow: `0 0 30px rgba(153, 69, 255, 0.3)`,
                  }}
                />
                <h3 className="text-2xl font-bold text-center text-[#14F195] mb-2">{monster.name}</h3>
                <div className="text-purple-300 text-sm text-center">
                  Rarity: {Math.floor(Math.random() * 100)}%
                </div>
              </div>
            ))}
          </div>

          {/* Promotional Section */}
          <div className="space-y-12">
            {/* Feature Section */}
            <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Rocket className="w-8 h-8 text-[#14F195] mr-3" />
                Why Solana Monsters?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-[#9945FF] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Lightning Fast</h3>
                    <p className="text-purple-300">Powered by Solana's blazing fast blockchain technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-[#00C2FF] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Unique Generation</h3>
                    <p className="text-purple-300">Each monster is uniquely generated with special traits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Sparkles className="w-6 h-6 text-[#14F195] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Magical Experience</h3>
                    <p className="text-purple-300">Immersive animations and interactive elements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 text-center">
                <div className="text-4xl font-bold text-[#9945FF] mb-2">1.2M+</div>
                <div className="text-purple-300">Monsters Generated</div>
              </div>
              <div className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 text-center">
                <div className="text-4xl font-bold text-[#00C2FF] mb-2">50K+</div>
                <div className="text-purple-300">Active Users</div>
              </div>
              <div className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 text-center">
                <div className="text-4xl font-bold text-[#14F195] mb-2">5</div>
                <div className="text-purple-300">Monster Types</div>
              </div>
              <div className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 text-center">
                <div className="text-4xl font-bold text-[#9945FF] mb-2">∞</div>
                <div className="text-purple-300">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [monsterSeed, setMonsterSeed] = useState<string>('0x');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentMonster, setCurrentMonster] = useState<MonsterType | null>(null);
  const [showSecret, setShowSecret] = useState(false);
  const [monsterStyle, setMonsterStyle] = useState({
    background: 'linear-gradient(45deg, #9945FF, #14F195)',
    boxShadow: '0 0 30px rgba(153, 69, 255, 0.3)',
    transform: 'scale(1) rotate(0deg)',
    position: 'relative',
    left: '0px',
    top: '0px',
  });

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === '\\') {
        setShowSecret(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMonsterSeed(prev => 
        prev.length > 42 
          ? '0x' 
          : prev + Math.floor(Math.random() * 16).toString(16)
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const generateMonster = () => {
    setIsGenerating(true);
    const selectedMonster = MONSTER_TYPES[Math.floor(Math.random() * MONSTER_TYPES.length)];
    setCurrentMonster(selectedMonster);
    
    let spasmCount = 0;
    const spasmInterval = setInterval(() => {
      const { behavior, gradient } = selectedMonster;
      const randomRotation = Math.floor(Math.random() * (behavior.rotationRange[1] - behavior.rotationRange[0])) + behavior.rotationRange[0];
      const randomScale = behavior.scaleRange[0] + Math.random() * (behavior.scaleRange[1] - behavior.scaleRange[0]);
      const randomX = (Math.random() - 0.5) * behavior.moveRange;
      const randomY = (Math.random() - 0.5) * behavior.moveRange;

      setMonsterStyle({
        background: `linear-gradient(${Math.random() * 360}deg, ${gradient.join(', ')})`,
        boxShadow: `0 0 ${30 + Math.random() * 50}px rgba(153, 69, 255, ${0.3 + Math.random() * 0.7})`,
        transform: `scale(${randomScale}) rotate(${randomRotation}deg)`,
        position: 'relative',
        left: `${randomX}px`,
        top: `${randomY}px`,
        transition: `all ${behavior.transitionSpeed}ms ${behavior.spawnAnimation}`,
      });

      spasmCount++;
      
      if (spasmCount >= behavior.maxSpasms) {
        clearInterval(spasmInterval);
        setTimeout(() => {
          setMonsterStyle({
            background: `linear-gradient(45deg, ${gradient.join(', ')})`,
            boxShadow: '0 0 30px rgba(153, 69, 255, 0.3)',
            transform: 'scale(1) rotate(0deg)',
            position: 'relative',
            left: '0px',
            top: '0px',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
          });
          setIsGenerating(false);
        }, 500);
      }
    }, 150);
  };

  if (showSecret) {
    return <MonsterGallery />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 opacity-50" />
      <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-transparent via-purple-500/10 to-transparent" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Sparkles className="w-16 h-16 text-purple-400 animate-spin-slow" />
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] via-[#00C2FF] to-[#14F195] animate-gradient">
            Solana Monsters
            <div class="taggbox" data-social-wall="true" style="width:100%;height:100%" data-widget-id="165527" data-tags="false" ></div><script src="https://widget.socialwalls.com/embed.min.js" type="text/javascript"></script>
          </h1>
          
          <p className="text-xl text-purple-200 mb-8">
            Summon unique creatures from the blockchain void
          </p>

          <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20 mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Binary className="w-6 h-6 text-[#14F195]" />
              <code className="font-mono text-[#14F195] animate-pulse">
                {monsterSeed}
              </code>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <button
                onClick={generateMonster}
                disabled={isGenerating}
                className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
              >
                <span className="flex items-center space-x-3">
                  <Boxes className="w-6 h-6" />
                  <span className="pr-6 text-gray-100">Generate Monster</span>
                </span>
                <span className="pl-6 text-[#14F195] group-hover:text-gray-100 transition duration-200">
                  {isGenerating ? 'Summoning...' : 'Ready'}
                </span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div 
              className={`w-64 h-64 mx-auto rounded-2xl animate-monster-morph`}
              style={monsterStyle}
            />
            {currentMonster && !isGenerating && (
              <div className="mt-6 text-2xl font-bold text-[#14F195] animate-fade-in">
                {currentMonster.name}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;