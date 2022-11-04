import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setNfts} from "../redux/actions/nftsAction";
import {Button, Card, CardMedia, Typography} from "@mui/material";
import axios from "axios";
import {Link} from "react-router-dom";

const NftsDisplay = () => {


    const nfts = useSelector((state) => state);
    const dispatch = useDispatch();


    useEffect(() => {

            axios.get(`https://api.opensea.io/api/v1/assets?format=json`)
                .then(response => {
                    dispatch(setNfts(response.data.assets))
                })



    }, [])

    const displayingData = nfts.allNfts.myNftData









    return (

        <div className="cards">
            {displayingData.map((nft) => {
                const {image_url, name, id, asset_contract,token_id } = nft




                return(
                    asset_contract.length > 0 || <Card key={id} className="card" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={image_url}
                            alt="NFT image"
                        />
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Link to={`/nfts/${asset_contract.address}/${token_id}`}><Button className="card-btn" size="small">Подробнее</Button></Link>
                    </Card>
                )
            })}
        </div>
    );
};

export default NftsDisplay;
