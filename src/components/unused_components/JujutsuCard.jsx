import React, { useState } from 'react';

const JujutsuCard = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (index) => setHoveredBox(index);
  const handleMouseLeave = () => setHoveredBox(null);

  return (
   <div>
    
   </div>
  );
};

export default JujutsuCard;
