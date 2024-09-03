import styled from "styled-components";  // Importing styled-components for styling
import React, { Component } from "react"; // Importing React and Component from react

// Styled component for the container element, used to hold the tooltip
const Container = styled.span`
  position: relative;         // Positioned relative to allow absolute positioning inside
  display: inline-block;      // Display as inline-block to maintain flow and allow width/height
`;

// Styled component for the text that triggers the tooltip
const ToolTip = styled.div`
  position: relative;         // Positioned relative to allow interaction with the tooltip
  color: grey;                // Grey text color
  border-bottom: 1px dashed black; // Dashed black underline to indicate hover
  cursor: pointer;            // Cursor changes to pointer on hover
  font-size: 50px;            // Large font size
`;

// Styled component for the hover text (tooltip)
const HoverText = styled.div`
  position: absolute;         // Positioned absolutely within the Container
  text-align: center;         // Center text alignment
  height: 90px;               // Fixed height for the tooltip
  width: 300px;               // Fixed width for the tooltip
  border-radius: 15px;        // Rounded corners
  background-color: black;    // Black background
  color: white;               // White text color
  font-size: 30px;            // Large font size
  left: ${(props) => props.left};   // Dynamic left position based on props
  top: ${(props) => props.top};     // Dynamic top position based on props
  visibility: ${(props) => (props.show ? "visible" : "hidden")}; // Visibility toggles based on state

  // Styling for the arrow below the tooltip
  &::before{
    content: "";              // Empty content for the arrow
    position: absolute;       // Positioned absolutely within the tooltip
    left:50%;                 // Center horizontally
    top:100%;                 // Positioned at the bottom of the tooltip
    transform:translatex(-50%); // Centering the arrow below the tooltip
    border:15px solid;        // Solid border for the arrow
    border-color:#000 #0000 #0000 #0000 ;  // Only top border visible, rest transparent
  };
`;

// Main App component
class App extends Component {
  state = {
    showToolTip: false,  // Initial state to hide the tooltip
  };

  // Method to toggle the tooltip visibility
  toggleToolTip = () => {
    this.setState((prevState) => ({ showToolTip: !prevState.showToolTip }));
  };

  render() {
    return (
      <>
        <Container
          onMouseEnter={this.toggleToolTip}  // Show tooltip on mouse enter
          onMouseLeave={this.toggleToolTip}  // Hide tooltip on mouse leave
        >
          <HoverText
            left={"0"}        // Tooltip's left position
            top={"-100px"}    // Tooltip's top position
            show={this.state.showToolTip}  // Tooltip visibility based on state
          >
            Thanks for hovering!
            <br />
            I am a tooltip
          </HoverText>

          <ToolTip>Hover over me!</ToolTip>  // Text that triggers the tooltip
        </Container>
      </>
    );
  }
}

export default App; // Exporting the App component as default
