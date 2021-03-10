import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faFileDownload, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


const Preview = ({data, category, setSelected}) => {

    const PreviewCont = styled.div`
        padding:0 20px;
        margin-bottom:30px;
    `

    const UpperWrap = styled.div`
        display:grid;
        grid-template-columns:auto 1fr;
        grid-gap:20px;
        position:relative;
        align-items:end;
        margin-bottom:30px;

        p{
            font-size:1rem;
            font-weight:500;
            margin-bottom:10px;
        }

        .closeIcon{
            color:#7f1616;
        }
    `

    const Thumbnail = styled.img`
        border-radius:10px;
        width:70%;
        height:70%;
        cursor:pointer;
    `

    const DownloadLink = styled.a`
        font-size:1.2rem;
        font-weight:700;
        background:#2d6a4f;
        padding:5px 15px;
        border-radius:5px;
        display:inline-block;
        color:#fff;
        text-decoration:none;
        
        .dlIcon{
            color:#fff;
            margin-right:10px;
        }
    `

    const Description = styled.p`
        text-align:justify;
        font-size:.85rem;
        line-height:1.4;
    `

    const CloseBtn = styled.span`
        position:absolute;
        top:0;
        right:0;
        cursor:pointer;
    `

    return (
        <div>
            <PreviewCont>
                <UpperWrap>
                    <div>
                        <Thumbnail src={`https://s3-ap-southeast-1.amazonaws.com/qcnt/${category === "Games-apk" ? data[0].fileName.substring(0, data[0].fileName.length - 3) : "content/"+data[0].origFileName+"."}png`} />
                    </div>
                    <div>
                        <Link to={`/${category === "Games-apk" ? "APK" : "HTML"}`}>
                            <CloseBtn onClick={(e) => setSelected([])} ><FontAwesomeIcon icon={faTimes} size="2x" className="closeIcon"/></CloseBtn>
                        </Link>
                        <p>{data[0].title}</p>
                        <DownloadLink href={category === "Games-apk" ? `https://s3-ap-southeast-1.amazonaws.com/qcnt/${data[0].fileName}` : data[0].fileName}>
                            <FontAwesomeIcon icon={category === "Games-apk" ? faFileDownload : faGamepad} size="1x" className="dlIcon" />
                            {category === "Games-apk" ? "DOWNLOAD" : "PLAY GAME"}
                        </DownloadLink>
                    </div>
                </UpperWrap>
                <div>
                    <Description>{data[0].description}</Description>
                </div>
            </PreviewCont>
        </div>
    )
}

export default Preview
