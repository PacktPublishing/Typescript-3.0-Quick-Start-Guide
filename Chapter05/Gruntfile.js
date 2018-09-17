module.exports = function (grunt) {
 grunt.initConfig({
  ts: {
   default: {
    src: ["src/**/*.ts"],
     outDir: "build",
     options: {
     rootDir: "src"
    }
   }
  }
 });
 grunt.loadNpmTasks("grunt-ts");
 grunt.registerTask("default", ["ts"]);
};
