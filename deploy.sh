#!/bin/bash

# S3 Deployment Script for Static Website
# Usage: ./deploy.sh [bucket-name] [profile]

set -e

# Configuration
BUCKET_NAME=${1:-"your-website-bucket-name"}
AWS_PROFILE=${2:-"default"}
REGION="us-east-1"

echo "🚀 Starting deployment to S3..."
echo "Bucket: $BUCKET_NAME"
echo "Profile: $AWS_PROFILE"
echo "Region: $REGION"

# Build the project
echo "📦 Building project..."
npm run build

# Check if bucket exists, create if not
echo "🔍 Checking if bucket exists..."
if ! aws s3api head-bucket --bucket "$BUCKET_NAME" --profile "$AWS_PROFILE" 2>/dev/null; then
    echo "📝 Creating S3 bucket..."
    aws s3 mb "s3://$BUCKET_NAME" --region "$REGION" --profile "$AWS_PROFILE"
    
    echo "🌐 Configuring bucket for static website hosting..."
    aws s3 website "s3://$BUCKET_NAME" \
        --index-document index.html \
        --error-document error.html \
        --profile "$AWS_PROFILE"
    
    echo "🔓 Setting bucket policy for public read access..."
    cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF
    
    aws s3api put-bucket-policy \
        --bucket "$BUCKET_NAME" \
        --policy file://bucket-policy.json \
        --profile "$AWS_PROFILE"
    
    rm bucket-policy.json
fi

# Upload files to S3
echo "📤 Uploading files to S3..."
aws s3 sync dist/ "s3://$BUCKET_NAME" \
    --delete \
    --profile "$AWS_PROFILE" \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.json"

# Upload HTML files with shorter cache
aws s3 sync dist/ "s3://$BUCKET_NAME" \
    --delete \
    --profile "$AWS_PROFILE" \
    --cache-control "public, max-age=0, must-revalidate" \
    --exclude "*" \
    --include "*.html" \
    --include "*.json"

# Get website URL
WEBSITE_URL="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"

echo "✅ Deployment complete!"
echo "🌐 Website URL: $WEBSITE_URL"
echo ""
echo "💡 Next steps:"
echo "   1. Configure CloudFront for better performance and HTTPS"
echo "   2. Set up Route 53 for custom domain"
echo "   3. Consider setting up CI/CD pipeline"
