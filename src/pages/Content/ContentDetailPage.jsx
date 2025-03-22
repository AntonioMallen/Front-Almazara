import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Utility from '../../context/UtilityContext';
import '../../Styles/css/content/contentDetail.min.css';

function ContentDetailPage() {
        const { id } = useParams();
        const [content, setContent] = useState(null)
    
        const contentList = [
            {
                id_i: 1,
                title_nv: "Miel",
                subtitle_nv: "El oro liquido",
                content_nv : "<h1>Prueba de contenido 1</h1><p>Contenido sobre las abejas</p>",
            },
            {
                id_i: 2,
                title_nv: "Miel",
                subtitle_nv: "De las mas ricas y baratas",
                content_nv : "<h1>Prueba de contenido 2</h2><p>Contenido sobre las abejas</p>",
            },
            {
                id_i: 3,
                title_nv: "Miel",
                subtitle_nv: "De las mas ricas y baratas",
                content_nv : "<p>Contenido sobre las abejas</p>",
            },
            {
                id_i: 4,
                title_nv: "Miel",
                subtitle_nv: "De las mas ricas y baratas",
                content_nv : "<p>Contenido sobre las abejas</p>",
            },
            {
                id_i: 5,
                title_nv: "Miel",
                subtitle_nv: "De las mas ricas y baratas",
                content_nv : "<p>Contenido sobre las abejas</p>",
            },
            {
                id_i: 6,
                title_nv: "Miel",
                subtitle_nv: "De las mas ricas y baratas",
                content_nv : "<p>Contenido sobre las abejas</p>",
            },
            {
                id_i: 7,
                title_nv: "Miel",
                subtitle_nv: "De las mas ricas y baratas",
                content_nv : "<p>Contenido sobre las abejas</p>",
            },
            {
                id_i: 8,
                title_nv: "Miel",
                subtitle_nv: "De las mas ricas y baratas",
                content_nv : "<p>Contenido sobre las abejas</p>",
            },
            {
                id_i: 9,
                title_nv: "Miel",
                subtitle_nv: "De las mas ricas y baratas",
                content_nv : "<p>Contenido sobre las abejas</p>",
            },
        ];

        useEffect(() => { 
            getContentInfo();
        }, []);
        
        const getContentInfo = () => {
            var realID =Utility.fromBase64(id)
            var element = contentList.find(elemento => elemento.id_i === realID);
            if(element !== null){
                setContent(element)
            }
        };

  return (
    <div>
        {content !== null && (
            <div className='contentDetail-main-container'>
                <h1>
                    {content.title_nv}
                </h1>
                <h3>
                    {content.subtitle_nv}
                </h3>
                <div className="contenidoDetalle">
                    <div dangerouslySetInnerHTML={{ __html: content.content_nv }} />
                </div>
            </div>
        )}
    </div>
  );
}

export default ContentDetailPage;
