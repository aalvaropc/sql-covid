import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {useState} from 'react'


const SqlCode = ({sql}) => {
  const codeString = sql;
  const [copy, setCopy] = useState(false);
  return (
    <div className='flex items-center justify-center'>
      <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
        <div className="flex justify-between px-4 text-white text-xs items-center">
          <p className="text-sm">Script</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-base mt-1">
                <ion-icon name="checkmark-sharp"></ion-icon>
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <span className="text-base mt-1">
                <ion-icon name="clipboard-outline"></ion-icon>
              </span>
              Copy code
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language="sql"
          style={atomOneDark}
          customStyle={{
            padding: "16px",
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default SqlCode;
