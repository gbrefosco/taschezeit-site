import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, makeStyles } from '@material-ui/core';
import api from '../services/api';
import SideNavMenu from '../components/global/sideNav';
import Moment from 'moment';
import Helper from '../services/generalHelper';

import * as AiIcons from "react-icons/ai";

import './Home.css';

export default function Home() {
    const date = new Date();

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 690,
            height: 270,
            backgroundColor: theme.palette.background.paper,
            border: '#7D53D4',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        }
    }));

    const [modalTimeAdd, setModalTimeAdd] = useState(false);
    const [editTime, setEditTime] = useState();
    const [itemsGrid, setItemsGrid] = useState([]);
    const [projects, setProjects] = useState([]);
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    function loadTimes() {
        api.get(`/time?user=${localStorage.getItem('userId')}`)
            .then(res => setItemsGrid(res.data));
    };

    const handleAddNewTime = () => {
        setModalTimeAdd(true);
    }

    function handleCloseTimeAdd(isSave) {
        if (isSave) {
            let newEditTime = { ...editTime, user: localStorage.getItem('userId') };
            api.post(`/time`, newEditTime)
                .then(res => loadTimes())
                .catch(err => alert(err));
        }
        setModalTimeAdd(false);
    }
    
    function handleTimeDelete(timeId) {
        api.delete(`/time/${timeId}`)
            .then(() => loadTimes())
            .catch((err) => alert('Error, try again later!'));
    }

    function handleStartChange(value) {
        if (value.length < 16) return;
        let start = Moment(value, 'DD/MM/YYYY HH:mm').unix();
        setEditTime({ ...editTime, start });
    };

    function handleEndChange(value) {
        if (value.length < 16) return;
        let end = Moment(value, 'DD/MM/YYYY HH:mm').unix();
        setEditTime({ ...editTime, end });
    };

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    };

    useEffect(() => {
        api.get(`/activity?user=${localStorage.getItem('userId')}`).then(response => setProjects(response.data));
    }, [projects]);

    useEffect(() => {
        loadTimes();
    }, [])

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form className="projectsSelection">
                <label>
                    Select your project:
                    <select onChange={(e) => setEditTime({ ...editTime, activity: e.target.value })}>
                        <option>Selecione uma opção:</option>
                        {projects.map(proj => (
                            <option value={proj.id}>{proj.name}</option>
                        ))}
                    </select>
                </label>
            </form>
            <TextField
                id="start"
                style={{ marginBottom: 8 }}
                fullWidth label="Start"
                variant="outlined"
                placeholder='Formato: dd/mm/aaaa hh:mm'
                onChange={(e) => handleStartChange(e.target.value)} />
            <TextField
                id="finish"
                style={{ marginBottom: 8 }}
                fullWidth label="Finish"
                variant="outlined"
                placeholder='Formato: dd/mm/aaaa hh:mm'
                onChange={(e) => handleEndChange(e.target.value)} />
            {/*
            TODO pós MVP
            <TextField
                id="description"
                multiline rows={7}
                style={{ marginBottom: 8, minHeight: 30 }}
                fullWidth label="Description"
                variant="outlined"
                onChange={() => setEditTime({ ...editTime,  })} /> */}
            <Button variant="contained" onClick={() => handleCloseTimeAdd(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => handleCloseTimeAdd(true)}>Complete</Button>
        </div>
    );

    return (
        <>
            <SideNavMenu />
            <div className="actualDate">
                {date.toDateString()}
            </div>

            <div style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <button className="btn" id="btnNewTime" onClick={handleAddNewTime}>
                    <AiIcons.AiOutlinePlusCircle style={{ fontSize: '45px', margin: '20px' }}/>
                </button>
                <strong>Add New Time</strong>
            </div>

            <div className="grid">
                {!!itemsGrid && (
                    <div style={{ marginLeft: '100px', marginBottom: '20px' }}>
                        <strong>
                            Tempo total: {Helper.getTotalTime(itemsGrid)} minutos.
                        </strong>
                    </div>
                )}
                {!!itemsGrid && itemsGrid.map(item => (
                    <div className="item">
                        <strong className="cardItem">{Helper.parseTimestamp(item.start, 'DD/MM/YYYY HH:mm')} - {Helper.parseTimestamp(item.end, 'DD/MM/YYYY HH:mm')}</strong>
                        <strong className="cardItem">{!!item.activity ? item.activity.name : ''}</strong>
                        <div className="svgIcon">
                            <AiIcons.AiOutlineDelete onClick={() => handleTimeDelete(item.id)}/>
                            {/* <AiIcons.AiOutlineEdit onClick={() => handleEditTime(item.id)} />*/} {/*pós MVP*/}
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                open={modalTimeAdd}
                onClose={handleCloseTimeAdd}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </>
    );
}