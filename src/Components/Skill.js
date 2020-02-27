import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const Skill = ({ skill }) => {

	const [open, setOpen] = React.useState(false);

	const handleTooltipClose = () => {
		setOpen(false);
	};

	const handleTooltipOpen = () => {
		setOpen(true);
	};

	return (
			<span className={"skills-icons-tips"}>
				<ClickAwayListener onClickAway={handleTooltipClose}>
					  <Tooltip
						  title={skill["name"]}  enterDelay={300}
						  leaveDelay={100} arrow placement={"bottom"}
						  PopperProps={{
							  disablePortal: true,
						  }}
						  onClose={handleTooltipClose}
						  open={open}
						  disableFocusListener
						  disableHoverListener
						  disableTouchListener
					  >
						<img src={require("../icons/" + skill["name"] + ".svg")}
							 alt={skill["name"]} className={"skills-icons"}
							 style={{opacity: skill['percent']}}
							 onClick={handleTooltipOpen}
							 onMouseEnter={handleTooltipOpen}
							 onMouseLeave={handleTooltipClose}
						/>
					  </Tooltip>
				</ClickAwayListener>
			</span>
	);
};

export default Skill;