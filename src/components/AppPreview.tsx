"use client";

export default function AppPreview() {
  return (
    <div className="w-[180px] rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
      
      {/* Top bar */}
      <div className="bg-black text-white text-[10px] px-3 py-2 flex justify-between">
        <span>9:41</span>
        <span>● ● ●</span>
      </div>

      {/* Screen */}
      <div className="p-3 text-black text-xs space-y-3">
        
        <div>
          <p className="font-bold text-sm">$5,720</p>
          <p className="text-gray-500 text-[10px]">Monthly Revenue</p>
        </div>

        <div className="space-y-2">
          <div className="bg-gray-100 rounded-lg p-2">
            <p className="font-semibold text-[11px]">Fat Loss Program</p>
            <p className="text-[10px] text-gray-500">$49</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-2">
            <p className="font-semibold text-[11px]">Strength Builder</p>
            <p className="text-[10px] text-gray-500">$79</p>
          </div>
        </div>

        <button className="w-full rounded-full bg-black py-2 text-[10px] font-semibold text-white">
          View Dashboard
        </button>

      </div>
    </div>
  );
}