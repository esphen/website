import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'components/common';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';

const LinkButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: blue;
  margin-bottom: 16px;
`;

export const GPGKey = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <>
      <LinkButton type="button" onClick={open}>Show my GPG key</LinkButton>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <h2>GPG Key</h2>
        <p>
          For advanced users: If you need to contact me privately you can use
          this to encrypt your message you send into the contact form.
        </p>
        <pre>
        {`
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: SKS 1.1.6

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
46tuA/pVj9YT052kaIzbrmEQ8r+BRUlg5NNbMA==
=b7OH
-----END PGP PUBLIC KEY BLOCK-----
`}
        </pre>
        <Button className="close-button" onClick={close}>
          Close
        </Button>
      </Dialog>
    </>
  );
};

export default GPGKey;