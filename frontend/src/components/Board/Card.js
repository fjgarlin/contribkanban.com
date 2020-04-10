import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Chip,
  Link,
} from "@material-ui/core";

const statusToColor = {
  1: "#fcfcfc",
  2: "#d7ffd8",
  3: "#fddddd",
  4: "#eff1f3",
  5: "#fddddd",
  6: "#fddddd",
  7: "#fddddd",
  8: "#ffffdd",
  13: "#ffece8",
  14: "#d7ffd8",
  15: "#d7ffd8",
  16: "#eff1f3",
  18: "#fddddd",
};

const priorityToLabel = {
  400: "Critical",
  300: "Major",
  200: "Normal",
  100: "Minor",
};

const categoryToLabel = {
  1: "Bug",
  2: "Task",
  3: "Feature",
  4: "Support",
  5: "Plan",
};

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    cursor: "pointer",
  },
  actions: {
    flexWrap: "wrap",
  },
});

function BoardCard({ data, classes }) {
  return (
    <Card
      variant="outlined"
      className={classes.root}
      onClick={() => {
        window.open(data.url);
      }}
      style={{
        backgroundColor: statusToColor[parseInt(data.field_issue_status)],
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="body1">
          {data.title}{" "}
          <Link color="inherit" href={data.url} target={`_blank`}>
            #{data.nid}
          </Link>
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Chip label={data.field_issue_version} size="small" />
        <Chip
          label={priorityToLabel[parseInt(data.field_issue_priority)]}
          size="small"
        />
        <Chip label={data.field_issue_component} size="small" />
        <Chip
          label={categoryToLabel[parseInt(data.field_issue_category)]}
          size="small"
        />
        {/* <Chip label={data.field_project.id} size="small" /> */}
      </CardActions>
    </Card>
  );
}
export default withStyles(styles)(BoardCard);