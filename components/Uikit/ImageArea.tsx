import React from 'react';
import noImage from '../../assets/images/no-image.png'
import Image from 'next/image'
import Styles from '../../styles/Dashboard.module.scss'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ImageArea = (props) => {
    //onChange={e => props.preview(props.id, e)}
    return (
        <div className={Styles.imageBx}>
            <Image src={noImage} id={props.id + "-thumb"} alt={"A thumbnail of the question"} layout="fill" objectFit="contain" priority={true} />
            <div className={Styles.Register_images_bx}>
                <label>
                    <input type="file" name="file" /><AddPhotoAlternateIcon />商品画像を登録 
                </label>
            </div>
        </div>
    )
};

export default ImageArea