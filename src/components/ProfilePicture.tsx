import { motion } from 'framer-motion';
import { User, Camera } from 'lucide-react';

export const ProfilePicture = () => {
  return (
    <motion.div
      className="relative mx-auto mb-10 w-52 h-52 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Glowing background ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-50 animate-pulse"></div>
      
      {/* Outer decorative ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-1">
        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
          {/* Profile picture placeholder */}
          <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl group">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10"></div>
            
            {/* Profile image placeholder with gradient */}
            <div className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-500 to-purple-600 flex items-center justify-center relative">
              <User className="w-20 h-20 text-white/80" />
              
              {/* Camera overlay on hover */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Floating particles around profile */}
      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 bg-purple-500 rounded-full"
        animate={{
          y: [0, -6, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-blue-500 rounded-full"
        animate={{
          y: [0, 6, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 -left-3 w-2 h-2 bg-purple-400 rounded-full"
        animate={{
          x: [0, -4, 0],
          opacity: [1, 0.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Status indicator */}
      <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 z-20">
        <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
      </div>
      
      {/* Add photo hint */}
      <motion.div
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        Click to add photo
      </motion.div>
    </motion.div>
  );
};
