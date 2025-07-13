import { ConnectButton} from "@rainbow-me/rainbowkit"
import { FaGithub } from "react-icons/fa";

export default function Header() {
    return (
        // classes from tailwind
            <header className="flex items-center justify-between p-4 md:p-6 bg-white/80 backdrop-blur-sm shadow-sm dark:bg-gray-800/80 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Иконка GitHub с красивым эффектом */}
                    <a
                        href="https://github.com/AsyaMaior/airdrop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub
                            size={24}
                            className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 transform group-hover:scale-110"
                        />
                    </a>
                    
                    {/* Название с градиентом (опционально) */}
                    <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                        Super SAAS
                    </h1>
                </div>
                
                <ConnectButton />
            </header>
    );
}