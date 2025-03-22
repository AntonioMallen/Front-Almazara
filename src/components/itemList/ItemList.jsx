import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/css/content/content.min.css'
import { useAuth } from '../../context/AuthContext';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Utility from '../../context/UtilityContext';



const ITEM_HEIGHT = 48;

function ItemList({ items = [] }) {
    const { user } = useAuth(); // Lee el usuario y token
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        console.log("entro")
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleEdit = (id = 0) => {
         navigate(`/content/detail/${id}/edit`)
    };
    const handleDelete = (id = 0) => {
        alert("eliminado");
    };

    const cardOptions = [
        {text: 'Editar', funct: handleEdit},
        {text: 'Eliminar', funct: handleDelete},
    ];
  return (
    <>
    <div className='content-main-container'>
        <div className='cardsContent'>
            {items.map(item => (
                <article className='card col-12 col-sm-6 col-md-4 col-lg-3'>
                    <div className='cardOptions'>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                            'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                            paper: {
                                style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                                },
                            },
                            }}
                        >
                            {cardOptions.map((option) => (
                           <MenuItem 
                                key={option.text} 
                                onClick={() => {
                                    handleClose();
                                    option.funct(Utility.toBase64(item.id_i));
                                }}
                            >
                                {option.text}
                            </MenuItem>
                            ))}
                        </Menu>
                    </div>
                    <a href={`/content/detail/${Utility.toBase64(item.id_i)}`}>
                        
                        <div 
                            className='card__img' 
                            style={{backgroundImage: `url(${item.image_nv})`}}
                        />
                        <div 
                            className='card__img--hover' 
                            style={{backgroundImage: `url(${item.image_nv})`}}
                        />
                        
                        <div className='card__info'>
                            <h3 className='card__title'>{item.name_nv}</h3>
                            <span className='card__by'>{item.description_nv}</span>
                        </div>
                    </a>
                </article>
            ))}
        </div>
    </div>
    </>
  );
}

export default ItemList;