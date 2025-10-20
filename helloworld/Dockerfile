
# Dùng Node.js chính thức
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và cài deps
COPY package*.json ./
RUN npm install

# Copy toàn bộ source vào container
COPY . .

# Expose port
EXPOSE 3000

# Lệnh chạy server
CMD ["node", "app.js"]
