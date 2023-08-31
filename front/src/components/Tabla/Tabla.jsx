import { Card, Typography } from "@material-tailwind/react";

const Tabla = ({ title, content }) => {
  return (
    <div>
      <Typography variant="h4">{title}</Typography>
      <div>
        <Card className="w-96">
          <table className="w-96 text-left">
            <tbody>
              {content.map((item, index) => {
                const isLast = index === content.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={item.column}>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.column}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.description}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>

        <br />
      </div>
    </div>
  );
};

export default Tabla;
