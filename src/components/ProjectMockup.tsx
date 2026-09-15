import React from 'react';
import { ExternalLink, Users, Calendar, BookCheck, ShieldAlert, Layers } from 'lucide-react';

interface ProjectMockupProps {
  type: 'real-estate' | 'ramadan-books' | 'event-master' | 'school-erp';
  title: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, title }) => {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0E1013] border border-[#27292D] rounded-lg overflow-hidden flex flex-col relative select-none">
      {/* Browser Bar */}
      <div className="bg-[#14161A] border-b border-[#27292D] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#27292D]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27292D]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27292D]" />
        </div>
        <div className="font-mono text-[11px] text-[#9A9CA3] bg-[#0E1013] px-3 py-1 rounded border border-[#222429] truncate max-w-[220px] sm:max-w-xs">
          {type === 'real-estate' && 'groupe-nkasso-transac-immo.netlify.app'}
          {type === 'ramadan-books' && 'ramadanbooksv2.netlify.app'}
          {type === 'event-master' && 'event-master.local/preview'}
          {type === 'school-erp' && 'les-flocons.internal/erp-dev'}
        </div>
        <div className="w-8 flex justify-end">
          <span className="w-2 h-2 rounded-full bg-[#55D69B]/60" />
        </div>
      </div>

      {/* Mockup Canvas */}
      <div className="flex-1 p-4 sm:p-6 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#111317] to-[#0A0B0D]">
        
        {/* Real Estate / Groupe Nkasso */}
        {type === 'real-estate' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#222429]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#55D69B]/20 flex items-center justify-center text-[#55D69B] font-bold text-xs">
                  GN
                </div>
                <span className="text-xs font-semibold text-[#F2F1ED] tracking-wider uppercase">
                  GROUPE NKASSO
                </span>
              </div>
              <div className="flex gap-2 text-[10px] font-mono text-[#9A9CA3]">
                <span className="text-[#55D69B]">Ventes</span>
                <span>Locations</span>
                <span>Terrains</span>
                <span>Contact</span>
              </div>
            </div>

            <div className="bg-[#17191E] border border-[#27292D] rounded-lg p-4">
              <div className="text-[11px] font-mono text-[#55D69B] uppercase mb-1">
                IMMOBILIER & TRANSACTIONS FONCIÈRES
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-[#F2F1ED] mb-2">
                Trouvez Votre Bien Immobilier en Toute Confiance
              </h4>
              <p className="text-xs text-[#9A9CA3] line-clamp-2">
                Expertise, négociation et accompagnement personnalisé pour vos transactions immobilières et gestion de parcelles.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#14161B] border border-[#222429] rounded p-2.5">
                <div className="h-16 bg-[#1A1C22] rounded mb-2 flex items-center justify-center text-xs font-mono text-[#9A9CA3]">
                  Villa Moderne · Bamako
                </div>
                <div className="text-xs font-semibold text-[#F2F1ED] truncate">Résidence ACI 2000</div>
                <div className="text-[11px] font-mono text-[#55D69B]">Disponible</div>
              </div>
              <div className="bg-[#14161B] border border-[#222429] rounded p-2.5">
                <div className="h-16 bg-[#1A1C22] rounded mb-2 flex items-center justify-center text-xs font-mono text-[#9A9CA3]">
                  Parcelle Sécurisée
                </div>
                <div className="text-xs font-semibold text-[#F2F1ED] truncate">Terrain Titré · Niamana</div>
                <div className="text-[11px] font-mono text-[#55D69B]">Titre Foncier</div>
              </div>
            </div>
          </div>
        )}

        {/* RamadanBooks V2 */}
        {type === 'ramadan-books' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#222429]">
              <div className="flex items-center gap-2">
                <BookCheck className="w-4 h-4 text-[#55D69B]" />
                <span className="text-xs font-semibold text-[#F2F1ED] tracking-wide">
                  RamadanBooks V2
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#55D69B]/15 text-[#55D69B]">
                Daily Routine Tracker
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#16181D] border border-[#27292D] rounded p-2.5">
                <span className="text-[10px] font-mono text-[#9A9CA3] block">FAJR</span>
                <span className="text-xs font-bold text-[#55D69B]">COMPLETED</span>
              </div>
              <div className="bg-[#16181D] border border-[#27292D] rounded p-2.5">
                <span className="text-[10px] font-mono text-[#9A9CA3] block">QUR&apos;AN</span>
                <span className="text-xs font-bold text-[#F2F1ED]">JUZ 14 / 30</span>
              </div>
              <div className="bg-[#16181D] border border-[#27292D] rounded p-2.5">
                <span className="text-[10px] font-mono text-[#9A9CA3] block">DHIKR</span>
                <span className="text-xs font-bold text-[#55D69B]">LOGGED</span>
              </div>
            </div>

            <div className="bg-[#16191E] border border-[#27292D] rounded-lg p-3.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#F2F1ED]">Spiritual Reflection & Daily Notes</span>
                <span className="text-[10px] font-mono text-[#9A9CA3]">Auto-Saved</span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px] text-[#9A9CA3]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55D69B]" />
                  <span>Morning remembrance & intention set</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55D69B]" />
                  <span>Daily charitable contribution logged</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3D414A]" />
                  <span>Evening Taraweeh preparation</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Event Master */}
        {type === 'event-master' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#222429]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#55D69B]" />
                <span className="text-xs font-semibold text-[#F2F1ED] tracking-wide">
                  EVENT MASTER
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#9A9CA3]">
                <Users className="w-3 h-3 text-[#55D69B]" />
                <span>Student Team Collaboration</span>
              </div>
            </div>

            <div className="bg-[#16181D] border border-[#27292D] rounded-lg p-4">
              <div className="text-[10px] font-mono text-[#9A9CA3] uppercase mb-1">
                CAMPUS & TECH EVENT DISCOVERY
              </div>
              <h4 className="text-sm font-semibold text-[#F2F1ED] mb-2">
                Explore, Schedule and Organize Campus Activities
              </h4>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded bg-[#20232A] text-[#F2F1ED] text-[10px] font-mono">
                  HTML5
                </span>
                <span className="px-2 py-0.5 rounded bg-[#20232A] text-[#F2F1ED] text-[10px] font-mono">
                  CSS3 Layouts
                </span>
                <span className="px-2 py-0.5 rounded bg-[#20232A] text-[#F2F1ED] text-[10px] font-mono">
                  Vanilla JS
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#131519] border border-[#222429] rounded p-2.5">
                <div className="text-xs font-semibold text-[#F2F1ED]">Annual Cultural Fest</div>
                <div className="text-[10px] font-mono text-[#9A9CA3]">Homepage UI Lead</div>
              </div>
              <div className="bg-[#131519] border border-[#222429] rounded p-2.5">
                <div className="text-xs font-semibold text-[#F2F1ED]">Hackathon Registration</div>
                <div className="text-[10px] font-mono text-[#9A9CA3]">Responsive Form Flow</div>
              </div>
            </div>
          </div>
        )}

        {/* School ERP / Les FLOCONS */}
        {type === 'school-erp' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#222429]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#55D69B]" />
                <span className="text-xs font-semibold text-[#F2F1ED] tracking-wide">
                  Complexe Scolaire Les FLOCONS
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-medium">
                CURRENTLY IN DEVELOPMENT
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="bg-[#16181D] border border-[#27292D] rounded p-2 text-center">
                <span className="text-[10px] font-mono text-[#9A9CA3] block">STUDENTS</span>
                <span className="text-xs font-bold text-[#F2F1ED]">Directory</span>
              </div>
              <div className="bg-[#16181D] border border-[#27292D] rounded p-2 text-center">
                <span className="text-[10px] font-mono text-[#9A9CA3] block">CLASSES</span>
                <span className="text-xs font-bold text-[#F2F1ED]">Schedules</span>
              </div>
              <div className="bg-[#16181D] border border-[#27292D] rounded p-2 text-center">
                <span className="text-[10px] font-mono text-[#9A9CA3] block">PAYMENTS</span>
                <span className="text-xs font-bold text-[#55D69B]">Ledger</span>
              </div>
              <div className="bg-[#16181D] border border-[#27292D] rounded p-2 text-center">
                <span className="text-[10px] font-mono text-[#9A9CA3] block">GRADES</span>
                <span className="text-xs font-bold text-[#F2F1ED]">Reports</span>
              </div>
            </div>

            <div className="bg-[#16191E] border border-[#27292D] rounded-lg p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#F2F1ED]">Role-Based Access Control Architecture</span>
                <span className="text-[10px] font-mono text-[#55D69B]">Schema Verified</span>
              </div>
              <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-[#9A9CA3]">
                <div className="p-1.5 rounded bg-[#1A1D23] border border-[#24272E] text-center">
                  Admin Portal
                </div>
                <div className="p-1.5 rounded bg-[#1A1D23] border border-[#24272E] text-center">
                  Faculty View
                </div>
                <div className="p-1.5 rounded bg-[#1A1D23] border border-[#24272E] text-center">
                  Parent Access
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Technical Status */}
        <div className="pt-3 border-t border-[#1C1F24] flex items-center justify-between font-mono text-[11px] text-[#9A9CA3]">
          <span className="truncate">{title}</span>
          <span className="text-[#55D69B] shrink-0 font-medium">Verified Source</span>
        </div>
      </div>
    </div>
  );
};
