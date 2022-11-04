import React, {useEffect, useState} from 'react';
import Header from "./Header";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, CardMedia, Typography,} from "@mui/material";


const SingleNft = () => {
    const {address, id} = useParams();
    const [nft, setNft] = useState({});

    useEffect(() => {
        axios.get(`https://api.opensea.io/api/v1/asset/${address}/${id}/`)
            .then(response => {
                setNft(response.data)
            })
    }, [])

    console.log(nft)


    return (


        nft.length > 0 || <div className="page">
            <Header/>


            <Card className="single-card" sx={{maxWidth: 545}}>
                <CardMedia
                    className="single-image"
                    component="img"
                    height="540"
                    image={nft.image_url}
                    alt="NFT image"
                />
                <Typography variant="h4">
                    {nft.name}
                </Typography>
                <Typography variant="h5" className="views">
                    продано раз : {nft.num_sales}
                </Typography>
                <Typography variant="subtitle2" className="parag">
                    Я бы представил больше информации но беспланое Api не дает больше данных(
                </Typography>

                <a  href={nft.permalink}><Button variant="contained">Страница на OpenSea</Button></a>
            </Card>


        </div>
    );
};

export default SingleNft;
