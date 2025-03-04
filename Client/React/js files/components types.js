///////////////////////////////////                class component                     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { Component } from "react";
import "./App.css";

interface userState {
    user: UserModel
}

export class App extends Component<any, userState>{

    public constructor(props: any) {
        super(props);

        this.state = {
            user: store.getState().user
        }
    }

    public render() {
        return (
            <div className="app">

            </div>
        )
    }
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//<Gifts minGifts={10} maxGifts={40} />


import React, { Component } from "react";
import "./gifts.css";

interface GiftsProps {
    minGifts: number;
    maxGifts: number;
}

interface GiftsState {
    countGifts: number;
}

export class Gifts extends Component<GiftsProps, GiftsState> {

    private timer;

    public constructor(props: GiftsProps) {
        super(props);

        const num = Math.floor(Math.random() * (this.props.maxGifts - this.props.minGifts + 1)) + this.props.minGifts;
        this.state = {
            countGifts: num
        };

        this.timer = setInterval(() => {
            const num = Math.floor(Math.random() * (this.props.maxGifts - this.props.minGifts + 1)) + this.props.minGifts;
            // this.state = {
            //     countGifts: num
            // };
            this.setState({ countGifts: num });
            console.log(this.state);
        }, 2000);

    }

    public componentWillUnmount(): void {
        clearInterval(this.timer);
    }

    public render() {
        return (
            <div className="gifts">
                <h4>We have {this.state.countGifts} gifts to share!</h4>
            </div>
        );
    }
}





/////////////////////////////          function component         /////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <h6>All Rights Reserved &copy; {new Date().getFullYear()}</h6>
        </div>
    );
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import React from 'react'

export default function App() {
    return (
        <>
            <div>My name is Itay</div>
        </>
    )
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////