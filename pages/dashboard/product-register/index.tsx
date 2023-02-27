import Head from 'next/head'
import Image from 'next/image'
import Styles from '../../../styles/Dashboard.module.scss'
import { Sidebar } from '../../../components/dashboard'
import Box from '@mui/material/Box'
import React,{ useCallback, useEffect, useState } from 'react'
import { SelectBox, TextInput,ImageArea } from '../../../components/Uikit'
import Resizer from "react-image-file-resizer";
import { storage, db } from "../../../firebase/firebase";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import noImage from '../../../assets/images/no-image.png'

export default function Dashboard() {
    const order: string = '/dashboard/order';
    const register: string = '/dashboard/product-register';
    const edit: string = '/dashboard/product-edit';
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [images, setImages] = useState([]);
    const [priceValidation, setPriceValidation] = useState(false);
    const [stockValidation, setStockValidation] = useState(false);
    const [registerBx, setRegisterBx] = useState(false);

    const categories = [
        {"id": 1,"name": "ドリンク",},
        {"id": 2,"name": "バーガー",},
        {"id": 3,"name": "セットメニュー",},
        {"id": 4,"name": "その他",},
    ]

    useEffect(() => {
        const isPrice = (price) => {
            var regexp = new RegExp(/^[+]?([1-9]\d*|0)$/);
            return regexp.test(price);
        }
        if (isPrice(price) === true && price !== "") {
            setPriceValidation(true)
        } else if (isPrice(price) === false && price !== "") {
            setPriceValidation(false)
        } else {
            setPriceValidation(false)
        }
    }, [price])

    useEffect(() => {
        const isStock = (stock) => {
            var regexp = new RegExp(/^[+]?([1-9]\d*|0)$/);
            return regexp.test(stock);
        }
        if (isStock(stock) === true && stock !== "") {
            setStockValidation(true)
        } else if (isStock(stock) === false && stock !== "") {
            setStockValidation(false)
        } else {
            setStockValidation(false)
        }
    },[stock])

    useEffect(() => {
        if (name !== "" && priceValidation !== false && stockValidation !== false && category !== "") {
            setRegisterBx(true);
        } else {
            setRegisterBx(false);
        }
    },[name,priceValidation,stockValidation,category])
        
    const inputName = useCallback((event) => {
        setName(event.target.value)
    }, [setName])
    const inputPrice = useCallback((event) => {
        setPrice(event.target.value)
    }, [setPrice])
    const inputStock = useCallback((event) => {
        setStock(event.target.value)
    }, [setStock])



    const [thumbnail, setThumbnail] = useState("");
    console.log(thumbnail)
    const onChange = async (e) => {
        const blobImage = e.target.files[0];
        console.log(blobImage)
        if (blobImage !== undefined) {
          if (/image.*/.exec(blobImage.type)) {
            const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSYZ0123456789";
            const N = 16;
              const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n % S.length]).join('')
              console.log(fileName)
            const uploadRef = storage.ref(`images/`).child(fileName);
            const uploadTask = uploadRef.put(blobImage);
            uploadTask.then(() => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    // const newImage = [{ id: fileName, path: downloadURL }];
                    setThumbnail(downloadURL)
                    setImages([{ id: fileName, path: downloadURL }])
                    console.log(downloadURL)
                });
            })
            // const uploadTask = storage.ref(`/images`).put(fileName)
          } else {
            console.log("データの読み込みに失敗しました。")
          }
        }
    };
console.log(images)
  return (
    <div className={Styles.dashboard}>
          <Sidebar order={order} register={register} edit={edit} />
          <div className={Styles.inner}>
              <h2>商品登録</h2>
              <div className={Styles.left}>
                  {/* <ImageArea images={images} setImages={setImages} onChange={onChange} /> */}
                  {thumbnail ? <div className="setImagesBx">
                    <span className="p-grid__list-images">
                          <Image src={thumbnail} alt={"A thumbnail of the question"} layout="fill" objectFit="contain" priority={true} />
                    </span>
                    </div> : <></>}
                  {/* <Image src={noImage} alt={"A thumbnail of the question"} layout="fill" objectFit="contain" priority={true} /> */}
            <div className={Styles.Register_images_bx}>
                <label>
                    <input type="file" name="file" onChange={onChange} /><AddPhotoAlternateIcon />商品画像を登録 
                </label>
            </div>
              </div>
              <div className={Styles.right}>
                  <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                      <TextInput fullWidth={true} label={"商品名"} multiline={false} required={true} onChange={inputName} rows={1} value={name} type={"text"} />
                      <SelectBox label={"カテゴリ―"} required={true} options={categories} select={setCategory} value={category} />
                      <TextInput fullWidth={true} label={"価格（税込み）"} multiline={false} required={true} onChange={inputPrice} rows={1} value={price} type={"text"} />
                      {priceValidation ? <></> : <span className={Styles.validation}>半角数字で入力してください。</span>}
                      <TextInput fullWidth={true} label={"在庫"} multiline={false} required={true} onChange={inputStock} rows={1} value={stock} type={"text"} />
                      {stockValidation ? <></> : <span className={Styles.validation}>半角数字で入力してください。</span>}
                  </Box>
                  {registerBx ? <div className={Styles.registerBtn}>登録</div> : <></>}
              </div>
          </div>
    </div>
  )
}