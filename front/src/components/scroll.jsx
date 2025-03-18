export default function CircularScrollAd() {
    const ad = [{ name: "shirt" }, { name: "shirt" }, { name: "shirt" }, { name: "shirt" }];
  
    return (
      <div className="overflow-hidden w-full flex items-center">
        <div className="flex gap-6 animate-circular-scroll">
          {[...ad, ...ad].map((item, index) => (
            <div
              key={index}
              className="w-[350px] h-48 bg-gradient-to-r from-cyan-700 to-cyan-300 rounded-lg flex items-center justify-center text-white text-xl shadow-lg mx-2"
            >
              {item.name} {index % ad.length + 1}
            </div>
          ))}
        </div>
      </div>
    );
  }
  