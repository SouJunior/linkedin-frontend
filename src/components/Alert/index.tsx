import { Box, Alert, AlertTitle, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IAlert {
    isShowAlert: boolean;
    setShowAlert: (isShowAlert: boolean) => void;
    titleAlert: string;
    textAlert: string;
    textColor: string;
    backgroundColor: string;
    alertSeverityType: 'error' | 'warning' | 'info' | 'success';
}

export default function AlertNotifications({ isShowAlert, setShowAlert, textColor, backgroundColor, alertSeverityType, titleAlert, textAlert}: IAlert) {

    return (
        <Box sx={{ minWidth: "635px", minHeight: "62px", position: "fixed", top: "1%", left: "56%" }}>
            <Collapse in={isShowAlert}>
                <Box sx={{
                    marginTop: "2px",
                    display: "flex",
                    minWidth: "100%"
                }}>
                    <Alert severity={alertSeverityType} sx={{
                        display: "flex",
                        minWidth: "100%",
                        justifyContent: "flex-start",
                        marginLeft: "2px",
                        marginRight: "30px",
                        color: textColor,
                        backgroundColor: backgroundColor,
                        fontFamily: 'Radio Canada',
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "22.4px"
                    }}>
                        <AlertTitle sx={{ fontFamily: 'Radio Canada', fontSize: "20px", fontWeight: "500", lineHeight: "24px" }}>{titleAlert}</AlertTitle>
                        {textAlert}
                    </Alert>
                </Box>
                <CloseIcon onClick={() => setShowAlert(false)} fontSize="inherit"
                    sx={{
                        width: "24px",
                        height: "24px",
                        marginLeft: "50px",
                        position: "relative",
                        bottom: "50%",
                        left: "88%",
                        color: textColor
                    }} />
            </Collapse>
        </Box>
    )

}