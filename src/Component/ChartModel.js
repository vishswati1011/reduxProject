import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Axis, Legend, LineSeries, Plot, Heading } from 'react-plot';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
            border: 'none',
            overflow: 'scroll',
            height: '99vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Plot
      width={400}
      height={350}
      margin={{ bottom: 50, left: 90, top: 50, right: 100 }}
    >
      <Heading
        title="Electrical characterization"
        subtitle="current vs voltage"
      />
      <LineSeries
        data={[
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 3 },
          { x: 5, y: 3 },
        ]}
        xAxis="x"
        yAxis="y"
        lineStyle={{ strokeWidth: 3 }}
        label="Vg = 7V"
        displayMarker={false}
      />
      <LineSeries
        data={[
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 3 },
          { x: 5, y: 3 },
        ]}
        xAxis="x"
        yAxis="y"
        displayMarker={true}
        markerShape="circle"
        label="Vg = 3V"
      />
      <Axis
        id="x"
        position="bottom"
        label="Drain voltage [V]"
        displayGridLines={true}
        max={6.1 / 2}
        tickStyle={{ fontSize: '0.8rem' }}
      />
      <Axis
        id="y"
        position="left"
        label="Drain current [mA]"
        displayGridLines={true}
        labelSpace={50}
        max={6.1 * 2}
        tickStyle={{ fontSize: '0.8rem' }}
      />
      <Legend position="right" />
    </Plot>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
