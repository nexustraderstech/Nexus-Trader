import React, { useState } from 'react';
import './BlogCard.css';
import VisibilityIconOutlined from '@mui/icons-material/VisibilityOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
const BlogCard = () => {
  const [fav, setFav] = useState(true);
  return (
    <>
      <div className='card'>
        <p className='card-title'>Lorem ipsum dolor sit amet.</p>
        <hr className='hrLine' />
        <div className='iconGroup'>
          <div>
            <VisibilityIconOutlined /> 300
            <ModeCommentOutlinedIcon /> 100
          </div>
          <div onClick={() => setFav(!fav)}>
            {fav ? (
              <FavoriteBorderOutlinedIcon sx={{ color: 'red' }} />
            ) : (
              <FavoriteOutlinedIcon sx={{ color: 'red' }} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
