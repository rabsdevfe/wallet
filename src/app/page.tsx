// import Link from 'next/link'
"use client";
import { Contacts } from "@/features/home/components/Contacts";
import { useFetchTransactions } from "@/features/home/hooks/useFetchTransactions";

export default function HomePage() {
  const { data, isLoading, error } = useFetchTransactions();
  console.log(data);
  return (
    <div className="p-8">
      <div className="px-6 py-8">
        {/* Header Info */}
        {/* <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
              <p className="text-white/70 text-sm font-medium">
                {new Date().toLocaleDateString("es-ES", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </p>
            </div>
            <h1 className="text-white text-2xl font-medium mb-1"> */}
        {/* {getGreeting()}, {user.name.split(" ")[0]} */}
        {/* Buenas tardes, Hola, Juan Pérez
            </h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div> */}

        {/* Balance Section */}
        {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
          <div className="space-y-2">
            <p className="text-white/70 text-sm font-medium">
              Balance disponible
            </p>
            <div className="text-white text-4xl font-medium tracking-tight"> */}
        {/* {formatBalance(balance)} */}
        {/* '2800'
            </div>
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <p className="text-white/60 text-xs">
                Cuenta activa • Última actualización: ahora
              </p>
            </div>
          </div>
        </div>*/}
      </div>
      <div>
        <Contacts />
      </div>
      home
    </div>
  );
}
