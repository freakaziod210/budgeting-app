import React, { Component } from "react";
import PropTypes from "prop-types";
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

class BudgetCard extends Component {
  render() {
    const { name, description, amount } = this.props;
    return (
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          height: 230,
          width: 300,
          borderRadius: 3,
          margin: 12
        }}
      >
        <CardContent>
          <Typography
            style={{ paddingBottom: 30 }}
            gutterBottom
            variant="title"
            noWrap
          >
            {name}
          </Typography>
          <Typography style={{ paddingBottom: 30 }} variant="subheading">
            {amount}
          </Typography>
          <Typography variant="caption">{description}</Typography>
        </CardContent>
      </Card>
    );
  }
}

BudgetCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  amount: PropTypes.string.isRequired
};

export default BudgetCard;
