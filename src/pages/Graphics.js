import React from 'react';
import './graphs.css';

export default function Graphics() {
    const donut = 'https://s3-alpha-sig.figma.com/img/0e66/1139/25a48ba56c3cc3162d1d481173a1ca15?Expires=1625443200&Signature=UukY9snSDI-J~zVQBzET3qdjdrmLdE~-fTkbbSyxrzp5Vz7JjVSTfvKP25MMszkuTpz4KA2VqwnXfuE7lAY63G8mOLhTKg-Sq6bwYmWJHv~Fbe1oSo3~WrHAQg5ACRIxEjCs~UeTU6j7pQYnZ-tY~7oWE7CJWPAUmvsEVGi-TdE0ANkHFZJfUlWGEBBSu5qC515tblrMiEVCRwUuKsg8E24d5BeOOv2oqns6Xa6E-sdasjX~NOVs-LcrlgjPDQ-i0n4j3qhPRH9nS56mwxB0DI7iV51Ahp5k6yQRFkxcE8ZtiD2uUWZywtVoOpGnBjiCPYsn6h04X~DniY52L2KpdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    const colunas = 'https://s3-alpha-sig.figma.com/img/c7c8/a893/5ec4abbabc2ce42fc00e9dfa647ee443?Expires=1625443200&Signature=OeWLhf7Lvgabr5lnda5KywyqIbHn3kS7cPVy~DCymN7jjqVQLX4E0z99EHK9KhGpY4fetIc7DIYUSlJMOauf5-ETzl0GW9ZFX9-Vc65K1TkitnbaGNU6rs5C2CMDGu6c6gZhdKNIekyDJJ4vHtlaKLEPRQrNT4DGxh1KMQnpnOUcsLCmAQI7EmxBwQotCkU8RvR~Z0-1jvXxmAcER7PrTVHP7ROOG6hcVBDOUkXWrwfj3GuzH0zsS7dM1bS9D3b1MlsCApULiA5ImWKka6FumZK-3jQ0HvAWFeZWIs2lcoGs4nwIMGWyzEp~LgatfpCGVggXnZPGhCckvfMbu0Nerw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    const tline = 'https://s3-alpha-sig.figma.com/img/3128/246c/2ab18e7ed3f2037f60f7a68970b0e1df?Expires=1625443200&Signature=QzpH4cRO9qCoVC925J4X-eQ6AyhYDEj7oF2xfedg4ZXkbriSYics70vGnvRJpRdo6A0KxVqSUVz2sduDHAvnyIZd3-pPK8pX8lO432qTU1ykeHtGXjExqY5-Be9oxOWxUzwTmFOy6VwqRwiMvH4quPksyHlQVAYQYn49msbXEDVbp2UkDC7WYtwwWFgxYMSeaDcf1Rm5C-CzkVSWMmDJ1sgQ9Rmmp-~mN~yzofrekIQ8I5S0cWWxFyEXi1WPXZWwAdvKrfI1uFpsefAIl7mCtHWZQwCy0qwjja0q3siw1McpwnbEg0WZTB60Fpw~FWSbdaJLtqTxTlpbrnmX50R-cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    const tree_map = 'https://s3-alpha-sig.figma.com/img/1fe3/3b4e/7e753dd22a27f56ab968527d0ec988af?Expires=1625443200&Signature=bOItB-PPPyH4qdW844zjwJcVQyKfhTNW807RqLpz0iuwS4~f~2j6rHxBGJ6Lvta5edJn6F8QjtsIyFy8MV56H3A7OCG279HsXDpaLYwdIAyJ0Avwsz6Pu1wPycFTqUzCnbz7ZDKMm~GbLtsDddqb7T9c6xEUZOhWvLvdzBkAMlj6LKwcimYCa7Qk8bwghzgkKHKQunvmtE8-BEBCVV0wTezToZbc2AavVeZ4w6JP6ozEsyYJqL7nI1JKNoGhMkVhwP4EVTzFxDLTPzwb1fetKTcSa~IviRqLKXrtlTkJ05I7HucRu3WWRgjLoefuKeLwWZhhneq7siGYbrNaezn~bw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

    return (
        <>
            <div className="upper">
                Select a graph
            </div>

            <div className="graphBox">
                <img src={donut} alt="donute"
                    style={{ paddingLeft: '20px', width: "220px", height: "180px" }} />
            </div>
            <div className="graphBox" style={{ left: '60%' }}>
                <img src={colunas} alt="colunas"
                    style={{ paddingLeft: '20px', width: "220px", height: "180px" }} />
            </div>
            <div className="graphBox" style={{ top: '65%' }}>
                <img src={tline} alt="tline"
                    style={{ paddingLeft: '20px', paddingTop: '5px', width: "225px", height: "175px" }} />
            </div>
            <div className="graphBox" style={{ top: '65%', left: '60%' }}>
                <img src={tree_map} alt="tree_map"
                    style={{ paddingLeft: '20px', paddingTop: '5px', width: "225px", height: "175px" }} />
            </div>

        </>
    );
}