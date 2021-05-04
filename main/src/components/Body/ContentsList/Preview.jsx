import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'

import { removeDetails } from '../../../actions/content'

const Preview = ({ data, setShowPrev }) => {
    const dispatch = useDispatch()

    const clickEvt = () => {
        setShowPrev(false)
        dispatch(removeDetails())
    }

    return (
        <div>
            <PreviewCont>
                <UpperWrap>
                    <div>
                        <Thumbnail src={data.thumbnail}/>
                    </div>
                    <div>
                        <CloseBtn onClick={clickEvt}><FontAwesomeIcon icon={faTimes} size="2x" className="closeIcon"/></CloseBtn>
                        <p>{data.name}</p>
                        <DownloadLink>
                            <FontAwesomeIcon icon={faFileDownload} size="1x" className="dlIcon" />
                            DOWNLOAD
                        </DownloadLink>
                    </div>
                </UpperWrap>
                <div>
                    <Description>{data.description}</Description>
                </div>
            </PreviewCont>
        </div>
    )
}

const PreviewCont = styled.div`
    padding:0 20px;
    max-width:900px;
    margin:0 auto 30px;
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
    width:100%;
    height:100%;
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

export default Preview
