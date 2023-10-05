## Description
This Node.js script makes it easy to download MP3 songs playlists from YouTube. It takes a `.txt` file with your search queries, and fetches the first top result for each of your query, placing them in a dedicated folder.

## How to use
To get started with this project, follow these steps to set it up on your local machine:

### Prerequisites
Before you begin, ensure you have met the following requirements:

- **Node.js**: You must have Node.js installed on your machine. If you haven't already, you can download it from the [official Node.js website](https://nodejs.org/)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jaroslaw11/y2mp3.git
    ```
   
2. **Navigate to the Project Directory**
    ```bash
    cd ./path/to/y2mp3
    ```
    
3. **Install Dependencies:**
   ```bash
   npm install
    ```

### How to run

1. **Create an input .txt file in the "input" folder**,
   For example:

#mysongs.txt

    michael jackson - billy jean
    simple minds - don`t you
    guns n roses - welcome to the jungle

*Therefore, it is not necessary to strictly indicate the artist and song title as in the example above, but this is preferable for results accuracy.*
*It then downloads the first search result, which is typically the most relevant match.*

2. **Now, just simply run it by:**
  ```bash
  node index.js
  ```
3. **If all is ok, you should see something like this in your bash:**
  ```bash
  Processing input file: ./input/mysongs.txt
  Download complete for search query: michael jackson - billy jean
  Download complete for search query: simple minds - don`t you
  Download complete for search query: guns n roses - welcome to the jungle
  ```

  
Now you can observe the created "mysongs" folder in the "output" folder. We go into it and see our mp3 files have been downloaded.
That`s it!


## Disclaimer

**Please Read Carefully**

This tool is provided for educational purposes. It is your responsibility as a user of this tool to ensure that you comply with all relevant copyright and intellectual property laws when using it. 

- The author(s) of this tool do not endorse or encourage any form of copyright infringement or violation of intellectual property rights.
- The author(s) are not responsible for any misuse of this tool, including but not limited to unauthorized copying, distribution, or use of copyrighted materials.

By using this tool, you acknowledge that:

- You are solely responsible for your actions while using it.
- You will respect and comply with all applicable copyright and intellectual property laws.
- The author(s) of this tool disclaim any liability for its misuse or violation of any third-party rights.

If you have any questions or concerns regarding the legal and ethical use of this tool, please seek legal advice or consult the relevant authorities.

**Use this tool responsibly and ethically. Respect the rights of authors and content creators.**


## Final Thoughts

Thank you for exploring this project! 
This project is open for you to use, modify, and contribute.
Happy coding and creating!
