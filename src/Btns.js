import Button from "@mui/material/Button";

export default function Btns({ btnValue }) {
  const onClick = (value) => {
    return () => {
      console.log(value);
      btnValue(value);
    };
  };

  return (
    <div className="btns">
      <div className="btns-line">
        <Button onClick={onClick("1")} value="1">
          1
        </Button>
        <Button onClick={onClick("2")} value="2">
          2
        </Button>
        <Button onClick={onClick("3")} value="3">
          3
        </Button>
        <Button onClick={onClick("del")} className="reset">
          Del
        </Button>
      </div>
      <div className="btns-line">
        <Button onClick={onClick("4")} value="4">
          4
        </Button>
        <Button onClick={onClick("5")} value="5">
          5
        </Button>
        <Button onClick={onClick("6")} value="6">
          6
        </Button>
        <Button onClick={onClick("+")} value="+">
          +
        </Button>
      </div>
      <div className="btns-line">
        <Button onClick={onClick("7")} value="7">
          7
        </Button>
        <Button onClick={onClick("8")} value="8">
          8
        </Button>
        <Button onClick={onClick("9")} value="9">
          9
        </Button>
        <Button onClick={onClick("-")} value="-">
          -
        </Button>
      </div>
      <div className="btns-line">
        <Button onClick={onClick(".")} value=".">
          .
        </Button>
        <Button onClick={onClick("0")} value="0">
          0
        </Button>
        <Button onClick={onClick("/")} value="/">
          /
        </Button>
        <Button onClick={onClick("*")} value="*">
          *
        </Button>
      </div>
      <div className="btns-line">
        <Button onClick={onClick("reset")} className="reset" value="">
          Reset
        </Button>
        <Button onClick={onClick("=")} className="ans" value="=">
          =
        </Button>
      </div>
    </div>
  );
}
