---
id: ssl-web
title: Configure SSL for BI Hub Web
sidebar_label: Configure SSL for BI Hub Web
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

This section explains the steps to *configure the SSL*, if you have installed *BI Hub Web with Nginx*.

:::note
If you have installed BI Hub Web without Nginx, then configuring SSL will be out of the scope for this document. 
:::

By default,the bundled Nginx will contain the self-signed SSL certificate issued to example.com. 

Kindly have the proper SSL certificate from the authorized vendor in `.crt` format and key file. 
You can also have your Self-Signed SSL certificate, but you need to make sure that the certificate belongs to a trusted certificate store by following the configuration steps provided by the particular browser which is out of scope for this document. 

BI Hub recommends having the proper SSL certificate from the authorized vendor.

1. Rename the SSL files to the required names:
 - X.X.X.X.crt file should be renamed to `server.crt`, and `X.X.X.X.key` file should be renamed to `server.key`.
2. Go to the nginx directory `<installation_folder>/VBIViewWeb/nginx/nginx/conf` and take backup of the `server.crt` and `server.key` files.
   > If the SSL configuration fails, we will need these files to bring back the server to normal working condition.
3. Replace these files with your trusted SSL files.
4. Edit the `config.json` file located in the directory `C:\Program Files\Visual BI Solutions\VBI View\VBIViewWeb`, and change the value of host from **http** to **https**:

   ```json {filename:"config.json"} {2}
   {
     "host":"https://..."
     "port":12200
   }
   ```
5. Restart the Nginx Server for the configuration to take effect.
  - Go to `<installation_folder>/VBIViewWeb/nginx/` directory, and open the `manager-windows.exe` file in administrator mode.
  - Select **Manage Server > Nginx** and click **Restart** ( Wait for the server to get restarted).
6. Open the browser and type the `<https://Backend server url>`.
   
  <div class="center">
    <Zoom>
      <img alt="BI Hub Web with secured SSL connection" src={useBaseUrl('doc-images/installation-guide/web-ssl-confirm.png')}/>
    </Zoom>
  <p>BI Hub Web with secured SSL connection</p>
  </div>

:white_check_mark: The BI Hub Web will be loaded with a secured SSL connection.

:::note
  - If there is any problem in restarting the server, check the log files for the errors which could be found at `<installation_folder>/VBIViewWeb/nginx/nginx/logs/`.
  - If the problem persists, replace the old SSL files with the new ones and restart the server.
    - If the server starts successfully, verify the SSL certificate and have a proper SSL format.

If you continue to have the problem, you could raise the support ticket in the support portal or by sending an email to support@bihub.com with supported log files and error images.
:::

:::important
If you are going to configure SSL, please make sure that BI Hub Server and BI Hub Agents and its respective BI platforms should also be configured with proper SSL. 

You cannot access HTTP content from the https protocol. The browser will throw the mixed content error if you try to access HTTP content from the https URL.
:::
