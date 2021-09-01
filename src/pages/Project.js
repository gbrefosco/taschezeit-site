import React, { useState, useEffect } from 'react';
import './project.css';
import api from '../services/api';
import { Modal, Button, makeStyles } from '@material-ui/core';
import * as AiIcons from "react-icons/ai";
import SideNavMenu from '../components/global/sideNav';

export default function Project() {

    const useStyles = makeStyles((theme) => ({
        addProject: {
            position: 'absolute',
            width: 690,
            height: 200,
            backgroundColor: theme.palette.background.default,
            border: '#7D53D4',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        deleteProject: {
            position: 'absolute',
            width: 500,
            height: 200,
            backgroundColor: theme.palette.background.default,
            border: '#7D53D4',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        }
    }));

    const [newProject, setNewProject] = useState('');
    const [project, setProject] = useState([]);

    const [editProject, setEditProject] = useState();
    const [newEditProject, setNewEditProject] = useState('');
    const [modalAddProject, setModalAddProject] = useState(false);

    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    const bodyAddProject = (
        <div style={modalStyle} className={classes.addProject}>
            <input className="editProjectName"
                value={editProject ? editProject.name : ''}
                placeholder="Enter the new project name"
                onChange={(e) => setEditProject({ ...editProject, name: e.target.value })}    
            />
            <Button variant="contained" onClick={() => handleCloseAddProject(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => handleCloseAddProject(true)}>Save</Button>
        </div>
    )


    async function handleCloseAddProject(isSave) {
        if (isSave) {
            if (!editProject) return;
            if (!editProject.id || !editProject.name) return;

            await api.put(`/activity/${editProject.id}/`, { name: editProject.name })
                .then(() => alert('Editted sucessfully!'))
                .catch(() => alert('An error ocurred, we are working on it!'))
                .finally(() => setModalAddProject(false));
        }
        
        setModalAddProject(false);
    }

    function handleAddProject(e) {
        e.preventDefault();

        if (newProject) {
            let userId = localStorage.getItem('userId');
            api.post('/activity', {
                name: newProject,
                user: userId
            });

            setNewProject('');
        }
    }

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    useEffect(() => {
        api.get(`/activity?user=${localStorage.getItem('userId')}`)
            .then(response => {
                setProject(response.data);
            });
    }, [project]);

    return (
        <>
            <SideNavMenu />
            <form className="formProject" onSubmit={handleAddProject}>
                <input
                    className="projectName"
                    value={newProject}
                    onChange={e => setNewProject(e.target.value)}
                    placeholder="Enter the project name"
                />
                <button className="submitProject" type="submit">Save</button>
            </form>

            <div className="gridProject">
                {project.map(proj => (
                    <div className="itemProject" key={proj.id}>
                        <strong>{proj.name}</strong>
                        <div className="svgIcon">
                            <AiIcons.AiOutlineEdit onClick={() => {
                                setModalAddProject(true);
                                setEditProject({ id: proj.id, name: proj.name});
                            }} />
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                open={modalAddProject}
                onClose={handleCloseAddProject}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyAddProject}
            </Modal>
        </>
    );
}