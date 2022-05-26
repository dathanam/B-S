import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../CSS/Layout.css';
import logoTD from '../WPhoto/LogoTD2.png'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import ClearIcon from '@material-ui/icons/Clear';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function LayoutLeft(props) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };
    const history = useHistory();

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
        avatar: {
            backgroundColor: blue[100],
            color: blue[600],
        },
    }));

    function SimpleDialog(props) {
        const classes = useStyles();
        const { onClose, selectedValue, open } = props;

        const handleClose = () => {
            onClose(selectedValue);
        };

        return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Chắc chắn muốn thoát chưa ?</DialogTitle>
                <div className="button_model1">
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<ClearIcon />}
                        onClick={handleClose}
                        type="button"
                    >
                        Hủy
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<ExitToAppIcon />}
                        type="button"
                    >
                        Thoát
                    </Button>
                </div>
            </Dialog>
        );
    }

    // async function logout() {
    //     var idPK = localStorage.getItem("phongkham")
    //     if (idPK != null) {
    //         var edit = await Function.editTableNoSave({
    //             table: "phongkham",
    //             MainID: { "id": parseInt(idPK) },
    //             trang_thai: false
    //         });
    //     }
    //     history.push("/")
    //     localStorage.removeItem("phongkham");
    //     localStorage.removeItem("accessToken");
    //     localStorage.removeItem("role");
    //     window.location.reload()
    // }

    return (
        <aside>
            <div className="top">
                <div className="logo">
                    <img src={logoTD} alt="avata" />
                    {/* <h2>EGA<span className="danger">TOR</span></h2> */}
                </div>
                <div className="close" id="close_btn" onClick={() => {
                    document.querySelector("aside").style.display = 'none'
                    document.querySelector("aside").style.animation = 'showMenu 400ms ease forwards'
                }}>
                    <span className="material-icons-outlined">close</span>
                </div>
            </div>
            <div className="infomation">
                <img src="https://vsmcamp.com/wp-content/uploads/2020/11/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg"alt="" />
                <b>kakak</b>
            </div>
            <div className="sidebar">
                <a href="#" className="active">
                    <span className="material-icons-outlined">home</span>
                    <h3>home</h3>
                </a>
                <a href="#" onClick={handleClickOpen}>
                    <span className="material-icons-outlined">logout</span>
                    <h3>Logout</h3>
                </a>
                <SimpleDialog open={open} onClose={handleClose} />
            </div>
        </aside>
    );
}

export default LayoutLeft;