export default function ProductReview() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img src="/paracetamol.png" alt="Paracetamol" className="w-24 h-24" />
        <div>
          <h1 className="text-2xl font-bold">Paracetamol 500 mg</h1>
          <p className="text-gray-500">Snabbverkande smärtstillande</p>
          <div className="text-yellow-400">⭐⭐⭐⭐☆ 4/5</div>
        </div>
      </div>

      {/* Fördelar & Nackdelar */}
      <div className="mt-4 flex gap-8">
        <div>
          <h2 className="font-semibold">Fördelar</h2>
          <ul className="list-disc list-inside">
            <li>Snabbverkande</li>
            <li>Få biverkningar</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Nackdelar</h2>
          <ul className="list-disc list-inside">
            <li>Dyrt</li>
            <li>Kan ge dåsighet</li>
          </ul>
        </div>
      </div>

      {/* Slutsats */}
      <div className="mt-4 p-4 bg-gray-50 rounded">
        <p>
          Rekommenderas för mild till måttlig smärta, undvik vid leversjukdom.
        </p>
      </div>
    </div>
  )
}
