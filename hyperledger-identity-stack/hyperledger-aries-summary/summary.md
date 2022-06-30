# Summary of LinuxFoundationX LFS173x: Becoming a Hyperledger Aries Developer

## Terminology

### Key terminologies
- **Verifiable Credential Model**
  - ![vc-model](./images/1_vc-model.png)
- **self-sovereign identity (SSI)**: SSI is the idea that you control your own data and you control when and how it is provided to others.
- **trust over IP**: Trust at the machine layer.
  - **aries in trust over ip**: Aries implements layer 2 (peer to peer), layer 1 (decentralized ids), and layer 3 (data exchange, including verifiable credentials).
- **decentralized identifiers**: a universally unique identifier (uuid) that is backed by a cryptographic key owned by the controller of the key.
- **zero-knowledge proofs**:  a cryptographic method of proving to someone that you know the value of an attribute without exposing the value of the attribute itself.
- **selective disclosure**: An issuer can put all of the claims that might be needed for a range of use cases, and the holder/prover and the verifier can limit the information shared for a specific presentation.
- **revocation**:  is the capability for an issuer to publish that an issued verifiable credential is no longer active. 
- **verifiable credential formats**: Any Aries agent that is built on Hyperledger Indy supports the Indy AnonCreds format.
- **secure storage**: Holds secrets for every Aries agent.
- **agent**: Software that interacts with other entities.

### Aries Ecosystem
1. Agents can be owned by the following
  - Large enterprises: [e.g. Land Transportation Office (LTO)] 
    - Will have public endpoints for other agents to use.
  - Small businesses: [e.g. Sole proprietorship businesses]
    - Can use 'Agency-as-a-Service' offered by vendors.
  - Mobile app: This will be a personal wallet.
  
2. **Verifiable data regisgtry**: Often implemented as a distributed ledger as the basis for issuing and presenting verifiable data. (e.g. https://indyscan.io/home/SOVRIN_MAINNET)

3. **Aries agent components**:
  - Framework: The framework contains the standard capabilities that enable an Aries agent to interact with its surroundings—ledgers, storage, verifiable credentials, presentations and other agents.
  - Controller: The controller is the component that controls the behaviour of an instance of an Aries framework—the business rules for that particular agent instance.
  - ![aries-architecture](./images/2_aries-architecture.png)

4. Aries community and standards
  - Aries RFCs (Request for comments): 
    - They describe important topics (not minor details) that the Hyperledger Aries wants to standardize across the Aries ecosystem.
    - https://github.com/hyperledger/aries-rfcs
  - Interoperability: Using a common set of protocols.
  - Aries Interop Profiles (AIP): Solution for the Aries community for Interoperability upon updates.
    - https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile

## Labs

### **Demo:** issuing, holding, proving, and verifying (For Android)
1. Mobile agent 
- Create and setup mobile agent
  - Download [Trinsic wallet](https://play.google.com/store/apps/details?id=id.streetcred.apps.mobile)
  - Create Trinsic wallet on mobile.
  - Click menu (hamburger icon on the upper left side of the screen)
  - Change 'network' to **'Sovrin Staging Network'**(This is a test network)

2. Issuer agent (https://email-verification.vonx.io/).

3. Issuer-Mobile agents connection request.
- **Issuer agent creates and sends a connection request**
  - Go to the following website `https://email-verification.vonx.io/`.
  - Input your email.
  - Click 'Submit'.
- **Mobile agent accepts connection request**
  - Verify email on email address provided.
  - After verifying email, you will be redirected to a website (e.g. https://email-verification.vonx.io/verify/[connection-id-here]/)
  - Scan the QR code using your Trinsic wallet on your phone.
  - You will get a pop up stating 'Email Verification Service has invited you to connect'.
  - Click 'Accept'. 

4. Issuer-Mobile agents credential offer.
- **Issuer agent creates credential offer.**
  - The website will then create a credential offer and send it to your mobile Trinsic wallet. (https://email-verification.vonx.io/in-progress/[connection-id-here]).
- **Mobile agent accepts credential offer.**
  - On you Trinsic mobile wallet on 'Actions' tab there should be a credential offer for a verified email.
  - Open 'Verified email'
  - Review the screen.
  - Click 'Accept'
- **Issuer agent logs mobile agent's acceptance of the offer**

5. Verifier agent (https://iiwbook.vonx.io/)

6. Verifier-Mobile agents connection request.
- **Verifier agent creates a connetion request**
  - Click 'Connect to Confbook'. A QR code will pop up.
- **Mobile agent accepts connection request**
  - Scan the QR code using your Trinsic wallet.
  - You will get a pop up stating 'ConfBook has invited you to connect'
  - Click 'Accept'

7. Verifier-Mobile agents proof of credentials.
- **Verifier agent creates a proof of credentials request**
  - The website will then create a proof of credentials request and send it to your mobile Trinsic wallet.
- **Mobile agent presents proof of credentials.**
  - On you Trinsic mobile wallet on 'Actions' tab there should be a request for proof of credentials.
  - Open 'BC Gov Verified Email'
  - Confbook should be asking for your email. 
  - Review the screen.
  - Click 'Present'

8. Verifier-Mobile agents credential offer.
- **Verifier agent creates and sends a credential offer**
  - After sending proof of credentials, you will be redirected to (https://iiwbook.vonx.io/submit-name/[connection-id-here])
  - Populate the following fields: Full name, Select a conference.
  - Click 'Submit'.
  - You will be redirected to the following page where verifier agent sent a credential offer. (https://iiwbook.vonx.io/in-progress/[connection-id-here])
- **Mobile agent accepts credential offer**
  - On you Trinsic mobile wallet on 'Actions' tab there should be a credential offer for a 'Conference Attendance'.
  - Open 'Conference Attendance'
  - Review the screen.
  - Click 'Accept'
- **Verifier agent logs mobile agent's acceptance of the offer**

9. Resources: Got demo and example on the following resources.
- https://github.com/cloudcompass/ToIPLabs/blob/main/docs/LFS173xV2/IssuingHoldingProving.md
- https://www.youtube.com/watch?v=9WZxlrGMA3s

### **Demo:** Connecting two local agents

### Pre-requsite
- CLI (git-bash)
- Docker
- Git

### Environment setup
1. Starting the Von network: This will act as a local 'verifiable data regisgtry'\
  - Open a new 'git-bash' CLI.
  - Clone the git repository for von-network.
  ```bash
  git clone https://github.com/bcgov/von-network
  ```
  - Navigate to the von-network directory
  ```bash
  cd von-network
  ```
  - Build von-network
  ```bash
  ./manage build
  ```
  - Run a Docker instance of von-network
  ```bash
  ./manage start --logs
  ```
  - Resource: https://github.com/bcgov/von-network/blob/main/docs/UsingVONNetwork.md#building-and-starting

2. Run Agents
  - Open a new 'git-bash' CLI.
  - Clone the git repository for aries-cloudagent-python.
  ```bash
  git clone https://github.com/hyperledger/aries-cloudagent-python
  ```
  - Navigate to demo directory
  ```bash
  cd aries-cloudagent-python/demo
  ```
  - Run user agent (Alice)
  ```
  LEDGER_URL=http://dev.greenlight.bcovrin.vonx.io ./run_demo alice
  ```
  - Open a new 'git-bash' CLI.
  - Run issuer agent (Faber College)
  ```
  LEDGER_URL=http://dev.greenlight.bcovrin.vonx.io ./run_demo faber
  ```
  - Resource: https://github.com/hyperledger/aries-cloudagent-python/tree/main/demo#the-alicefaber-python-demo

3. Connecting the agents.
- ** Issuer agent (Faber) creates a connection request**
  - This will automatically be done upon starting issuer agent.
  - 'Faber' agent will generate the following:
    - Invitation data
	- QR Code
  - Take note of the invitation data, it would look similar to this.
  ```json
  {"@type": "https://didcomm.org/out-of-band/1.0/invitation", "@id": "d4169abe-4dfd-49fc-bdb1-f007c8258d46", "services": [{"id": "#inline", "type": "did-communication", "recipientKeys": ["did:key:z6MkneMK93pm4bd3w7ZLdUvi7e7pg1xq9KXHkE5ygMTfSQ2P"], "serviceEndpoint": "http://host.docker.internal:8020"}], "label": "faber.agent", "handshake_protocols": ["https://didcomm.org/didexchange/1.0"]}
  ```
- **User agent (Alice) accepts a connection request**
  - On 'Alice' agent CLI, there would be a field 'Invite details:'
  - Input invitation data from 'Faber' agent. (Must be one line with no 'new lines')

4. Interact between the agents.
- You can use the option '(3) Send Message' on both Issuer (Faber), and User (Alice) agents.

5. On Issuer agent (Faber), you have additional options
- (1) Issue Credential: Issues a credential to user agent (Alice).
- (2) Send Proof Request: Asks for proof of credentials from user agent (Alice).
- (4) Create New Invitation: Create new invitation (connection request).
- https://github.com/cloudcompass/ToIPLabs/blob/main/docs/LFS173xV2/agentsConnecting.md

## Resources
- https://github.com/cloudcompass/ToIPLabs/blob/main/docs/LFS173x