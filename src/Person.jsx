import './Person.css'

function Person({ name, tags }) {
  
  const getTagStyle = (tagText) => {
    const text = tagText.toLowerCase().trim();
    
    if (text.includes('gaming')) return 'tag-gaming';
    if (text.includes('club')) return 'tag-club';
    if (text.includes('chill')) return 'tag-chill';
    if (text.includes('music')) return 'tag-music';
    if (text.includes('party')) return 'tag-party';
    
    return ''; 
  };

  const tagList = typeof tags === 'string' ? tags.split(',') : tags;

  return (
    <div className="person">
      <h3>{name}</h3>
      <p>Interests:</p>
      
      <div className="tags-container">
        {tagList.map((tag, index) => (
          <span key={index} className={`tag-pill ${getTagStyle(tag)}`}>
            {tag.trim()}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Person