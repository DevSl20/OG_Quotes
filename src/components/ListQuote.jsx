import SingleQuote from "./SingleQuote";

function ListQuotes({ quotes, onDelete, onLike, onDislike, onSort }) {
  return (
    <div className="flex flex-col gap-2">
      {quotes.map((quote) => (
        <SingleQuote 
          key={quote.id} 
          quote={quote} 
          onDelete={onDelete} 
          onLike={onLike} 
          onDislike={onDislike}
          onSort={onSort}
        />
      ))}
    </div>
  );
}

export default ListQuotes;