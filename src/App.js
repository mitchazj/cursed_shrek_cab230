const shrek_memes = [
  "https://i.redd.it/vhi2sjrvs7441.jpg",
  "https://preview.redd.it/4aqf46tkyro11.jpg?auto=webp&s=2a00edce81f0c5c4324472f6485e009fb11a467f",
  "https://th.bing.com/th/id/R.470e7340bb9d7c215599610b449d30f3?rik=mXhJu6cexB80eA&riu=http%3a%2f%2fi0.kym-cdn.com%2fphotos%2fimages%2ffacebook%2f000%2f709%2f597%2f006&ehk=aqDm3RoZdKQK1E%2fHlp8kuWUlVWXzLJGSXi9jnjJjwfE%3d&risl=&pid=ImgRaw&r=0",
  "https://ih1.redbubble.net/image.656691071.9963/flat,1000x1000,075,f.jpg",
  "https://i.pinimg.com/736x/5e/ff/30/5eff305327dd634da3110514c7cb1187--meme-dank-shrek.jpg"
];

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="text-center py-6 bg-green-700 text-white">
        <h1 className="font-bold text-lg">Hello CAB230</h1>
        <h2 className="text-sm text-green-200">The best shrek memes.</h2>
      </div>
      <div className="max-w-3xl mx-auto py-4">
        <div className="grid grid-cols-3 gap-4">
          {shrek_memes.map((meme) => (
            <img src={meme} alt="shrek meme" />
          ))}
        </div>
      </div>
    </div>
  );
}
